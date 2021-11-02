const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");

const {
    submitAssignment,
    getStudent,
} = require("../controllers/assignStudent");

router.post("/submitAssignment", requireLogin, submitAssignment);
router.get("/getStudent", requireLogin, getStudent);

module.exports = router;
