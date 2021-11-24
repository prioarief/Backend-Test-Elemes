const jwt = require("jsonwebtoken");

const createToken = (payload) =>
  jwt.sign(
    payload,
    process.env.JWT_KEY,
    typeof payload === "object" && { expiresIn: process.env.JWT_EXP }
  );

module.exports = { createToken };
