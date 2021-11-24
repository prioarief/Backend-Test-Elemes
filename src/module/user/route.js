const express = require("express");
const router = express.Router();
const request = require("./request");

router.post("/register", async (req, res) => {
  return await request.register(req, res);
});
router.post("/login", async (req, res) => {
  return await request.login(req, res);
});

module.exports = router;
