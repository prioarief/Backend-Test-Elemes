const express = require("express");
const router = express.Router();
const request = require("./request");

router.get("/statistic",  async (req, res) => {
  return await request.statistic(req, res);
});

module.exports = router;
