const crypto = require("crypto-js");

const encrypt = (payload) =>
  crypto.AES.encrypt(payload, process.env.ENCRYPT_KEY).toString();

const decrypt = (payload) =>
  crypto.AES.decrypt(payload, process.env.ENCRYPT_KEY).toString(
    crypto.enc.Utf8
  );

module.exports = { encrypt, decrypt };
