const sharp = require("sharp");

module.exports = async (buffer, quality) => {
  return await sharp(buffer).webp({ quality }).toBuffer();
};
