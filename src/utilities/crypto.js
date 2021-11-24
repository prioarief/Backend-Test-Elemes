const crypto = require("crypto-js");

const encrypt = (payload) =>
  crypto.AES.encrypt(payload, process.env.ENCRYPT_KEY).toString();

module.exports = { encrypt };
