const Teacher = require("../models/Teachers");
const asyncHandler = require("../middlewares/asyncHandler");
const sendResponse = require("../utils/sendResponse");
const Student = require("../models/Students");
const Assignments = require("../models/Assignments");
const Exams = require("../models/Exams");

// @desc Submit Assignment
// @route POST /student/submitAssignment
// @access Private

module.exports.submitAssignment = asyncHandler(async (req, res) => {
    const { assignment, assignmentId } = req.body;

    //Uploading work for a particular assignment
    const updatedAssignment = await Assignments.findByIdAndUpdate(
        {
            _id: assignmentId,
        },
        {
            $push: {
                assignmentsSubmitted: {
                    givenBy: req.student._id,
                    assignment,
                    dateSubmitted: Date.now(),
                },
            },
        },
        {
            new: true,
            runValidators: true,
        }
    );

    console.log(updatedAssignment, "LOL");

    sendResponse(updatedAssignment, "uploaded work", res);
});

// @desc Submit exam answer
// @route POST /student/examAnswer
// @access Private

module.exports.submitAnswer = asyncHandler(async (req, res) => {
    const { examId, answer } = req.body;

    //Uploading work for a particular exam
    const updatedExam = await Exams.findByIdAndUpdate(
        {
            _id: examId,
        },
        {
            $push: {
                answersSubmitted: {
                    givenBy: req.student._id,
                    answer,
                    dateSubmitted: Date.now(),
                },
            },
        },
        {
            new: true,
            runValidators: true,
        }
    );

    console.log(updatedExam, "LOL");

    sendResponse(updatedExam, "uploaded work", res);
});

// @desc Student details
// @route POST /student/getStudent
// @access Private

module.exports.getStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById({
        _id: req.student._id,
    })
        .populate({
            path: "assignments",
            populate: {
                path: "givenBy",
            },
        })

    console.log(student, "student");

    sendResponse(student, "student data fetched successfully", res);
});
