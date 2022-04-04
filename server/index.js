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
const { createSignedWaiver } = require("./imageHandler");
const databaseManager = require("./databaseManager");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const waivers = {};
const companies = {};

// Gonna have to fix cors eventually.
const app = express();
app.use(bodyParser.json());
app.use(cors());

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
            const waiverJSON = companies[company]["waivers"][waiverId]["json"];
            if (waivers[waiverJSON]) {
              companies[company].waivers[waiverId].metadata =
                waivers[waiverJSON];
            } else {
              fs.readFile(path.join(__dirname, waiverJSON), (err, data) => {
                if (err) console.log(err);
                waivers[waiverJSON] = JSON.parse(data);
                for (const overlay of waivers[waiverJSON].overlays) {
                  if (overlay.type === "initials") {
                    waivers[waiverJSON]["requiresInitials"] = true;
                  }
                }
                companies[company].waivers[waiverId].metadata =
                  waivers[waiverJSON];
              });
            }
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

const getSignedWaivers = async (
  signature,
  initials,
  waiverInfo,
  userInfo,
  minorInfo = undefined
) => {
  const signedWaivers = [];

  for (const waiver of waiverInfo) {
    const signed = await createSignedWaiver(
      companies[waiver.partnerId]["waivers"][waiver.partnerWaiverId]["json"],
      signature,
      userInfo,
      initials
    );
    signedWaivers.push(signed);
  }

  if (minorInfo) {
    for (const minor of minorInfo.minors) {
      for (const waiver of waiverInfo) {
        const signed = await createSignedWaiver(
          companies[waiver.partnerId]["waivers"][waiver.partnerWaiverId][
            "json"
          ],
          signature,
          userInfo,
          initials,
          minor
        );
        if (signed) signedWaivers.push(signed);
      }
    }
  }

  return signedWaivers;
};

const signWaivers = async (req, resp) => {
  const partnerId = req.body.partnerId;
  const signature = req.body.signature;
  const initials = req.body.initials;
  const waivers = req.body.waivers;
  const userInfo = req.body.userInfo;
  const minorInfo = req.body.minorInfo;

  const waiverInfo = Object.keys(waivers).map((id) => {
    return {
      partner: partnerId,
      partnerWaiverId: id,
    };
  });

  const signedWaivers = await getSignedWaivers(
    signature,
    initials,
    waiverInfo,
    userInfo,
    minorInfo
  );

  return resp.send({ signedWaivers });
};

const lookupWaivers = async (req, resp) => {
  const { firstName, lastName, dateOfBirth } = req.query;

  const user = await databaseManager.searchUser(
    firstName,
    lastName,
    dateOfBirth
  );

  if (!user)
    return resp
      .status(500)
      .send({ err: "Sorry, that user could not be found." });

  const waiverRows = await databaseManager.searchWaiversByUserId(
    user._id.toString()
  );

  if (!waiverRows)
    return resp
      .status(500)
      .send({ err: "That person has not signed a waiver with us." });

  const waivers = waiverRows.map((waiver) => {
    return {
      partnerId: waiver.partner,
      partnerWaiverId: waiver.companyWaiverId,
    };
  });

  const userInfo = {
    firstName: user.firstName,
    lastName: user.lastName,
    dateOfBirth: user.dateOfBirth,
    email: user.email,
    addressLine: user.address.line,
    addressCity: user.address.city,
    addressState: user.address.state,
    addressPostal: user.address.postal,
    phoneNumber: user.phoneNumber,
  };

  const signed = await getSignedWaivers(
    user.signature,
    user.initials,
    waivers,
    userInfo
  );

  const signedWaivers = {};

  for (let i = 0; i < waivers.length; i++) {
    const partner = waivers[i].partnerId;
    if (!signedWaivers[partner]) signedWaivers[partner] = [];
    signedWaivers[partner].push({
      ...waivers[i],
      signed: signed[i],
      name: companies[partner]["waivers"][waivers[i].partnerWaiverId][
        "metadata"
      ]["name"],
    });
  }

  return resp.status(200).send({ signedWaivers });
};

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
  return resp.status(200).send(companies);
};

const getWaiverInformation = async (req, resp) => {
  const { partnerId } = req.query;
  const { waiverId } = req.query;

  return resp.status(200).send(companies[partnerId][waivers][waiverId]);
};

app.get("/user", databaseManager.getUser);
app.get("/companies", getCompanies);
app.get("/waiver", getWaiverInformation);
app.get("/lookupWaivers", lookupWaivers);
app.post("/signWaivers", signWaivers);

app.listen(PORT);
console.log("Server started on port " + PORT);
loadCompanies(path.join(__dirname, "companies"));
console.log("Loaded companies from JSON files.");
databaseManager.init();
