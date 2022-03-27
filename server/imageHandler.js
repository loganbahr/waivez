/**
 * @file imageHandler.js
 * @author Devin Arena, Logan Bahr
 * @description Handles the manipulation of images e.g. places signatures, names and dates onto images.
 * @since 3/27/2022
 **/

const jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const loadImage = async (path) => {
  const image = await jimp.read(path);
  return image;
};

const createSignedWaiver = async (company, waiverJSON, signatureData) => {
  const jsonPath = path.join(
    __dirname,
    "companies",
    company,
    "waivers",
    waiverJSON
  );
  if (fs.existsSync(jsonPath)) {
    fs.readFile(jsonPath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const json = JSON.parse(data);
        loadImage(
          path.join(
            __dirname,
            "companies",
            company,
            "waivers",
            json["imagePath"]
          )
        ).then((waiver) => {
          const buffer = Buffer.from(signatureData, "base64");
          loadImage(buffer).then((signature) => {
            // signature.resize(
            //   Math.min(signature.getWidth(), 140),
            //   Math.min(signature.getHeight(), 84)
            // );
            for (let location of json["signatureLocations"]) {
              waiver.blit(
                signature,
                location["x"] - signature.getWidth() / 2,
                location["y"] - signature.getHeight() / 2
              );
            }
            waiver.write("test.png");
          });
        });
      }
    });
  }
};

module.exports = {
  createSignedWaiver,
};
