require("dotenv").config();
const cloudinary = require("cloudinary");
const { Readable } = require("stream");
const sharp = require("./sharp");

const bufferToStream = (buffer) => {
  const readable = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });
  return readable;
};

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadStream = async (buffer, folder) => {
  return new Promise(async (resolve, reject) => {
    const data = await sharp(buffer, 20);
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        resolve(result);
        // return res.json({ URL: result.secure_url });
      }
    );
    bufferToStream(data).pipe(stream);
  });
};

module.exports = uploadStream;
