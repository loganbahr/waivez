/**
 * @file index.js
 * @author Devin Arena
 * @description Main file for the backend server of waivez
 * @since 3/10/2022
 */
const PORT = 5000; // still kinda undecided, consult with Logan
const companies = { naplesbeachwatersports: {}, marcoislandwatersports: {} };

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  password: process.env.PGPASS,
  port: process.env.PGPORT,
});

// Gonna have to fix cors eventually.
const app = express();
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

const loadCompanies = () => {
  for (let company in companies) {
    if (fs.existsSync(`./${company}/information.json`)) {
      fs.readFile(`./${company}/information.json`, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          companies[company] = JSON.parse(data);
          console.log(companies[company]);
        }
      });
    }
  }
};

app.listen(PORT);
console.log("Server started on port " + PORT);
loadCompanies();
