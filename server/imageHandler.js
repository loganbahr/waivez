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

const createSignedWaiver = async (waiverJSON, signatureData, userInfo) => {
  let genWaiver = "";
  const jsonPath = path.join(__dirname, waiverJSON);
  if (fs.existsSync(jsonPath)) {
    const data = await fsp.readFile(jsonPath);
    const json = JSON.parse(data);
    const waiver = await loadImage(
      path.join(__dirname, path.dirname(waiverJSON), json["imagePath"])
    );
    const buffer = Buffer.from(signatureData, "base64");
    const signature = await loadImage(buffer);
    for (const location of json["signatureLocations"]) {
      waiver.blit(
        signature,
        location.x - signature.getWidth() / 2,
        location.y - signature.getHeight() / 2
      );
    }
    const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    for (const location of json["printNameLocations"]) {
      const text = userInfo.firstName + " " + userInfo.lastName;
      const width = jimp.measureText(font, text);
      const height = jimp.measureTextHeight(font, text);
      waiver.print(
        font,
        location.x - width / 2,
        location.y - height / 2,
        text
      );
    }
    for (const location of json["currentDateLocations"]) {
      const text = new Date().toLocaleDateString("en-US");
      const width = jimp.measureText(font, text);
      const height = jimp.measureTextHeight(font, text);
      waiver.print(
        font,
        location.x - width / 2,
        location.y - height / 2,
        text
      );
    }
    genWaiver = await waiver.getBase64Async(jimp.AUTO);
  }
  return genWaiver;
};

module.exports = {
  createSignedWaiver,
};
