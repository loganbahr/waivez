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
const fsp = require("fs/promises");
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

const getCompanies = async (_req, resp) => {
  console.log(companies);
  return resp.status(200).send(companies);
};

const getWaiverInformation = async (req, resp) => {
  const { partnerId } = req.query;
  const { waiverId } = req.query;

  return resp.status(200).send(companies[partnerId][waivers][waiverId]);
};

const signWaivers = async (req, resp) => {
  const partnerId = req.body.partnerId;
  const signature = req.body.signature;
  const initials = req.body.initials;
  const waivers = req.body.waivers;
  const userInfo = req.body.userInfo;
  const minorInfo = req.body.minorInfo;

  const signedWaivers = [];

  for (const waiverId of waivers) {
    const waiver = await createSignedWaiver(
      companies[partnerId]["waivers"][waiverId]["json"],
      signature,
      userInfo,
      initials
    );
    signedWaivers.push(waiver);
  }

  for (const minor of minorInfo.minors) {
    for (const waiverId of waivers) {
      const waiver = await createSignedWaiver(
        companies[partnerId]["waivers"][waiverId]["json"],
        signature,
        userInfo,
        initials,
        minor
      );
      if (waiver) signedWaivers.push(waiver);
    }
  }

  return resp.send({ signedWaivers });
};

/**
 * Crawl the company folder for all subdirectories (should be all companies).
 */
const loadCompanies = async (root) => {
  const files = await fsp.readdir(root);
  for (const file of files) {
    if (file === "information.json") {
      const company = path.basename(root);
      fs.readFile(path.join(root, file), (err, data) => {
        if (err) {
          console.log(err);
        } else {
          companies[company] = JSON.parse(data);
          for (const waiverId in companies[company].waivers) {
            fs.readFile(
              path.join(
                __dirname,
                companies[company]["waivers"][waiverId]["json"]
              ),
              (err, data) => {
                if (err) console.log(err);
                companies[company].waivers[waiverId].metadata =
                  JSON.parse(data);
                for (const overlay of companies[company].waivers[waiverId]
                  .metadata.overlays) {
                  if (overlay.type === "initials") {
                    companies[company].waivers[waiverId].metadata[
                      "requiresInitials"
                    ] = true;
                  }
                }
              }
            );
          }
        }
      });
      break;
    }
    const absPath = path.join(root, file);
    fs.stat(absPath, (err, stats) => {
      if (err) console.log(err);
      if (stats.isDirectory()) loadCompanies(absPath);
    });
  }
};

app.get("/companies", getCompanies);
app.get("/waiver", getWaiverInformation);
app.post("/signWaivers", signWaivers);

app.listen(PORT);
console.log("Server started on port " + PORT);
loadCompanies(path.join(__dirname, "companies"));
