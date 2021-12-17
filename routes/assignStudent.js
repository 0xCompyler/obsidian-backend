const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");

const {
    submitAssignment,
    getStudent,
    submitAnswer,
} = require("../controllers/assignStudent");

router.post("/submitAssignment", requireLogin, submitAssignment);
router.get("/getStudent", requireLogin, getStudent);
router.post("/submitAnswer",requireLogin,submitAnswer);

module.exports = router;
