const express = require("express");
const { getAllCourses, getDate } = require("../controllers/course");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");

router.get("/getAllCourses",getAllCourses);
router.get("/getDate",getDate);

module.exports = router;
