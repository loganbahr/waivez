/**
 * @file index.js
 * @author Devin Arena
 * @description Main file for the backend server of waivez
 * @since 3/10/2022
 */
const PORT = 5000; // still kinda undecided, consult with Logan

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const { Pool } = require("pg");
const { createSignedWaiver } = require("./imageHandler");
const fs = require("fs");
const path = require("path");

const companies = {};

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  password: process.env.PGPASS,
  port: process.env.PGPORT,
});

// Gonna have to fix cors eventually.
const app = express();
app.use(bodyParser.json());
app.use(cors());

/**
 * Test request to ping the server.
 */
app.get("/user", (req, resp) => {
  const { id } = req.query;

  pool.query("SELECT * FROM users WHERE id=$1", [id], (err, res) => {
    if (err || res.rowCount < 1) {
      resp.send("Failed to find a user with that ID.");
    } else {
      resp.send({
        id: id,
        first_name: res.rows[0].first_name,
        last_name: res.rows[0].last_name,
        date_of_birth: res.rows[0].date_of_birth,
        address: res.rows[0].address,
        email: res.rows[0].email,
        phone_number: res.rows[0].phone_number,
      });
    }
  });
});

app.get("/company", (req, resp) => {
  const { company } = req.query;

  if (!company) {
    return resp
      .status(401)
      .send({ err: "You must specify a company with that request!" });
  } else if (!companies[company]) {
    return resp.status(404).send({ err: "That company does not exist!" });
  }
  return resp.status(200).send(companies[company]);
});

const signWaivers = async (req, resp) => {
  const partnerId = req.body.partnerId;
  const signature = req.body.signature;
  const waivers = req.body.waivers;

  const signedWaivers = [];

  for (const waiverId of waivers) {
    const waiver = await createSignedWaiver(
      partnerId,
      companies[partnerId]["waivers"][waiverId]["json"],
      signature
    );
    signedWaivers.push(waiver);
  }

  return resp.send({ signedWaivers });
};

/**
 * Crawl the company folder for all subdirectories (should be all companies).
 */
const loadCompanies = () => {
  // We load these files to later reference them for image manipulation
  fs.readdir(path.join(__dirname, "companies"), (err, files) => {
    if (err) throw err;
    for (const company of files) {
      if (fs.existsSync(path.join(__dirname, "companies", company))) {
        fs.readFile(
          path.join(__dirname, "companies", company, "information.json"),
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              companies[company] = JSON.parse(data);
            }
          }
        );
      }
    }
  });
};

app.post("/signWaivers", signWaivers);

app.listen(PORT);
console.log("Server started on port " + PORT);
loadCompanies();
