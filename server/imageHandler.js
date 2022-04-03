/**
 * @file imageHandler.js
 * @author Devin Arena, Logan Bahr
 * @description Handles the manipulation of images e.g. places signatures, names and dates onto images.
 * @since 3/27/2022
 **/

const SIGNATURE = "signature";
const INITIALS = "initials";
const PRINT_NAME = "printName";
const CURRENT_DATE = "currentDate";
const DATE_OF_BIRTH = "dateOfBirth";
const MINOR_NAME = "minorName";

const jimp = require("jimp");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const loadImage = async (path) => {
  const image = await jimp.read(path);
  return image;
};

/**
 * Creates a signed waiver.
 *
 * @param {String} waiverJSON the path to the waiver's JSON file
 * @param {String} signatureData the base64 of the signature
 * @param {Object} userInfo The user's info object
 * @param {String} initialsData the base64 of the initials
 * @param {boolean} minor if this is for a minor
 * @returns the generated waiver base64
 */
const createSignedWaiver = async (
  waiverJSON,
  signatureData,
  userInfo,
  initialsData = undefined,
  minorInfo = undefined
) => {
  let genWaiver = "";
  const jsonPath = path.join(__dirname, waiverJSON);
  if (fs.existsSync(jsonPath)) {
    const data = await fsp.readFile(jsonPath);
    const json = JSON.parse(data);
    if (minorInfo !== undefined && json["minorOverlays"].length == 0)
      return null;
    const waiver = await loadImage(
      path.join(__dirname, path.dirname(waiverJSON), json["imagePath"])
    );
    const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    const buffer = Buffer.from(signatureData, "base64");
    const signature = await loadImage(buffer);
    const initialsBuffer = Buffer.from(initialsData, "base64");
    const initials = await loadImage(initialsBuffer);
    const overlays =
      minorInfo !== undefined ? json["minorOverlays"] : json["overlays"];
    for (const overlay of overlays) {
      switch (overlay.type) {
        case SIGNATURE:
          await drawImage(overlay.x, overlay.y, waiver, signature);
          break;
        case INITIALS:
          await drawImage(overlay.x, overlay.y, waiver, initials);
          break;
        case CURRENT_DATE:
          await drawCurrentDate(overlay, waiver, font);
          break;
        case PRINT_NAME:
          await drawPrintedText(
            overlay.x,
            overlay.y,
            userInfo.firstName + " " + userInfo.lastName,
            waiver,
            font
          );
          break;
        case DATE_OF_BIRTH:
          await drawPrintedText(
            overlay.x,
            overlay.y,
            userInfo.dateOfBirth,
            waiver,
            font
          );
          break;
        case MINOR_NAME:
          await drawPrintedText(
            overlay.x,
            overlay.y,
            minorInfo.firstName + " " + minorInfo.lastName,
            waiver,
            font
          );
          break;
      }
    }
    genWaiver = await waiver.getBase64Async(jimp.AUTO);
  }
  return genWaiver;
};

/**
 * Draws an image over the waiver.
 *
 * @param {Number} x the x position to draw to
 * @param {Number} y the y position to draw to
 * @param {jimp} waiver the waiver jimp image to overlay the image
 * @param {jimp} image jimp image draw
 */
const drawImage = async (x, y, waiver, image) => {
  waiver.blit(image, x - image.getWidth() / 2, y - image.getHeight() / 2);
};

/**
 * Prints text over the waiver.
 *
 * @param {Number} x the x position to draw to
 * @param {Number} y the y position to draw to
 * @param {jimp} waiver the waiver jimp image to overlay the text
 * @param {String} text the printed text to draw
 */
const drawPrintedText = async (x, y, text, waiver, font) => {
  const width = jimp.measureText(font, text);
  const height = jimp.measureTextHeight(font, text);
  waiver.print(font, x - width / 2, y - height / 2, text);
};

/**
 * Draws the current date onto the waiver from the specified JSON file.
 *
 * @param {JSON} overlay the overlay data, needed because sometimes dates get split
 * @param {jimp} waiver the waiver to overlay text onto
 * @param {Font} font the jimp font to utilize
 */
const drawCurrentDate = async (overlay, waiver, font) => {
  let drawn = false;
  const text = new Date().toLocaleDateString("en-US");
  // handle the case for split dates
  if (overlay["day"] !== undefined) {
    const dayInfo = overlay["day"];
    const day = text.split("/")[1];
    const width = jimp.measureText(font, day);
    const height = jimp.measureTextHeight(font, day);
    waiver.print(font, dayInfo.x - width / 2, dayInfo.y - height / 2, day);
    drawn = true;
  }
  if (overlay["month"] !== undefined) {
    const monthInfo = overlay["month"];
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
  if (overlay["year"] !== undefined) {
    const yearInfo = overlay["year"];
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
    waiver.print(font, overlay.x - width / 2, overlay.y - height / 2, text);
  }
};

module.exports = {
  createSignedWaiver,
};
