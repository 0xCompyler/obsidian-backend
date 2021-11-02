const express = require("express");
const router = express.Router();
const {
    uploadAssignment,
    getTeacher,
    initiateCourse,
} = require("../controllers/assignTeacher");
const requireTeacherLogin = require("../middlewares/requireLoginTeacher");

router.post("/uploadAssignment", requireTeacherLogin, uploadAssignment);
router.get("/getTeacher", requireTeacherLogin, getTeacher);
router.post("/initiateCourse",requireTeacherLogin,initiateCourse);

module.exports = router;
