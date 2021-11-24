const express = require("express");
const router = express.Router();
const request = require("./request");

router.post("/", async (req, res) => {
  return await request.get(req, res);
});

module.exports = router;
