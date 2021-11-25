const express = require("express");
const upload = require("../../utilities/multer");
const router = express.Router();
const request = require("./request");

router.post("/", upload.single("thumbnail"), async (req, res) => {
  return await request.post(req, res);
});
router.get("/", async (req, res) => {
  return await request.gets(req, res);
});
router.get("/:id", async (req, res) => {
  return await request.get(req, res);
});
router.delete("/:id", async (req, res) => {
  return await request.destroy(req, res);
});
router.put("/:id", async (req, res) => {
  return await request.update(req, res);
});

module.exports = router;
