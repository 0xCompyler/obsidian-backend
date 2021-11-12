const asyncHandler = require("../middlewares/asyncHandler");
const sendResponse = require("../utils/sendResponse");
const Courses = require("../models/Course");

// @desc register student
// @route POST /getAllCourses
// @access Private

module.exports.getAllCourses = asyncHandler(async (req, res, next) => {

    const courses = await Courses.find({});

    sendResponse(courses,"Courses fetched successfully",res);

});

// @desc register student
// @route POST /getDate
// @access Private

module.exports.getDate = asyncHandler(async(req,res,next) => {
    const date = new Date();

    sendResponse(date,"Fetched date",res);    
})

