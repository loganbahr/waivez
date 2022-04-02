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
      waiver.print(font, location.x - width / 2, location.y - height / 2, text);
    }
    if (json["currentDateLocations"] !== undefined)
      await drawCurrentDates(json["currentDateLocations"], waiver, font);
    if (json["dateOfBirthLocations"] !== undefined)
      await drawDateOfBirths(
        json["dateOfBirthLocations"],
        userInfo.dateOfBirth,
        waiver,
        font
      );
    genWaiver = await waiver.getBase64Async(jimp.AUTO);
  }
  return genWaiver;
};

/**
 * Draws the current date onto the waiver from the specified JSON file.
 *
 * @param {ArrayList} locations the locations to print to
 * @param {jimp} waiver the waiver to overlay text onto
 * @param {Font} font the jimp font to utilize
 */
const drawCurrentDates = async (locations, waiver, font) => {
  for (const location of locations) {
    let drawn = false;
    const text = new Date().toLocaleDateString("en-US");
    // handle the case for split dates
    if (location["day"] !== undefined) {
      const dayInfo = location["day"];
      const day = text.split("/")[1];
      const width = jimp.measureText(font, day);
      const height = jimp.measureTextHeight(font, day);
      waiver.print(font, dayInfo.x - width / 2, dayInfo.y - height / 2, day);
      drawn = true;
    }
    if (location["month"] !== undefined) {
      const monthInfo = location["month"];
      const month = text.split("/")[0];
      const width = jimp.measureText(font, month);
      const height = jimp.measureTextHeight(font, month);
      waiver.print(
        font,
        monthInfo.x - width / 2,
        monthInfo.y - height / 2,
        month
      );
      drawn = true;
    }
    if (location["year"] !== undefined) {
      const yearInfo = location["year"];
      let year = text.split("/")[2];
      if (yearInfo["special"] !== undefined) {
        if (yearInfo.special.includes("lastTwo")) year = year.substring(2);
      }
      const width = jimp.measureText(font, year);
      const height = jimp.measureTextHeight(font, year);
      waiver.print(font, yearInfo.x - width / 2, yearInfo.y - height / 2, year);
      drawn = true;
    }
    if (!drawn) {
      const width = jimp.measureText(font, text);
      const height = jimp.measureTextHeight(font, text);
      waiver.print(font, location.x - width / 2, location.y - height / 2, text);
    }
  }
};

/**
 * Draws the users date of birth onto the waiver.
 * 
 * @param {Array} locations the locations to draw to 
 * @param {String} dateOfBirth the date of birth from user information
 * @param {jimp} waiver the jimp image to overlay the DoB onto
 * @param {Font} font the jimp font to utilize
 */
const drawDateOfBirths = async (locations, dateOfBirth, waiver, font) => {
  for (const location of locations) {
    const width = jimp.measureText(font, dateOfBirth);
    const height = jimp.measureTextHeight(font, dateOfBirth);
    waiver.print(
      font,
      location.x - width / 2,
      location.y - height / 2,
      dateOfBirth
    );
  }
};

module.exports = {
  createSignedWaiver,
};
