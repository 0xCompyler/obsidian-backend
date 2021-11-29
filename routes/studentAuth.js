const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin.js");
const colors = require("colors");

const {
    signin,
    signup,
    dashboard,
    getAllStudents
} = require("../controllers/studentAuth")

router.use((req,res,next) => {
    console.log(colors.green(
        `${req.method} request made route ${req.originalUrl} at ${Date.now()}`
    ));
    next();
})

router.post("/signup",signup);
router.post("/signin",signin);
router.get("/dashboard",requireLogin,dashboard);
router.get("/allStudents",getAllStudents);

module.exports = router;