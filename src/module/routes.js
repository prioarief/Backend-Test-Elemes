const express = require("express");
const router = express.Router();
const userRoute = require("./user/route");
const reportRoute = require("./report/route");
const courseRoute = require("./course/route");
const courseCategoryRoute = require("./courseCategory/route");
const jwtMiddleware = require("../middlewares/jwt")

router.use("/course", jwtMiddleware.userRoute, courseRoute);
router.use("/course-category", jwtMiddleware.userRoute, courseCategoryRoute);
router.use("/report", jwtMiddleware.adminRoute, reportRoute);
router.use("/user", userRoute);

module.exports = router;
