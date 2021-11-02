const Teacher = require("../models/Teachers");
const asyncHandler = require("../middlewares/asyncHandler");
const sendResponse = require("../utils/sendResponse");
const Student = require("../models/Students");
const Assignments = require("../models/Assignments");

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
