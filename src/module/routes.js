const express = require("express");
const router = express.Router();
const userRoute = require("./user/route");
const reportRoute = require("./report/route");
const courseRoute = require("./course/route");
const jwtMiddleware = require("../middlewares/jwt")

router.use("/course", jwtMiddleware.userRoute, courseRoute);
router.use("/report", jwtMiddleware.adminRoute, reportRoute);
router.use("/user", userRoute);

module.exports = router;
