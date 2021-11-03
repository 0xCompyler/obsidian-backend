const express = require("express");
const router = express.Router();
const { markAttendanceRequest } = require("../controllers/attendance");
const requireLogin = require("../middlewares/requireLogin");

router.post("/markAttendance",requireLogin,markAttendanceRequest);

module.exports = router;
