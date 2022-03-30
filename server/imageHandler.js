/**
 * @file imageHandler.js
 * @author Devin Arena, Logan Bahr
 * @description Handles the manipulation of images e.g. places signatures, names and dates onto images.
 * @since 3/27/2022
 **/

const jimp = require("jimp");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const loadImage = async (path) => {
  const image = await jimp.read(path);
  return image;
};

const createSignedWaiver = async (company, waiverJSON, signatureData) => {
  let genWaiver = "";
  const jsonPath = path.join(
    __dirname,
    "companies",
    company,
    "waivers",
    waiverJSON
  );
  if (fs.existsSync(jsonPath)) {
    const data = await fsp.readFile(jsonPath);
    const json = JSON.parse(data);
    const waiver = await loadImage(
      path.join(__dirname, "companies", company, "waivers", json["imagePath"])
    );
    const buffer = Buffer.from(signatureData, "base64");
    const signature = await loadImage(buffer);
    for (let location of json["signatureLocations"]) {
      waiver.blit(
        signature,
        location["x"] - signature.getWidth() / 2,
        location["y"] - signature.getHeight() / 2
      );
    }
    genWaiver = await waiver.getBase64Async(jimp.AUTO);
  }
  return genWaiver;
};

module.exports = {
  createSignedWaiver,
};
