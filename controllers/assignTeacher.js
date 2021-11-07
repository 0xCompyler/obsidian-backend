const Teacher = require("../models/Teachers");
const asyncHandler = require("../middlewares/asyncHandler");
const sendResponse = require("../utils/sendResponse");
const Assignments = require("../models/Assignments");
const Student = require("../models/Students");
const Courses = require("../models/Course");
const path = require("path");

// @desc initiate course
// @route POST /teacher/initiateCourse
// @access Private

module.exports.initiateCourse = asyncHandler(async(req,res) => {

    const {name,from,to,_id,handout,credits} = req.body;

    const newCourse = new Courses({
        courseOf:req.teacher._id,
        _id,
        name,
        from,
        to,
        days:["Monday","Tuesday","Wednesday","Thursday","Friday"],
        handout,
        credits
    })

    const savedCourse = await newCourse.save();

    const updatedTeacher = await Teacher.findByIdAndUpdate({
        _id:req.teacher._id
    },{
        $set:{
            course:savedCourse._id
        }
    },{
        new:true,
        runValidators:true
    }).populate("course")

    sendResponse(updatedTeacher, "course initiated", res);
})

// @desc Upload assignment
// @route POST /teacher/uploadAssignment
// @access Private

module.exports.uploadAssignment = asyncHandler(async (req, res) => {
    const { title, description, assignmentGiven, deadline,assignmentId } = req.body;

    const teacher = await Teacher.findById(req.teacher._id);

    //Creating new assignment

    const newAssignment = new Assignments({
        givenBy: req.teacher._id,
        title,
        description,
        assignmentId,
        assignmentGiven,
        deadline,
        courseCode:teacher.course,
        uploadDate: Date.now(),
    });

    const saveAssignment = await newAssignment.save();

    console.log(saveAssignment, "uploaded Assignment");

    const updatedTeacher = await Teacher.findByIdAndUpdate(
        {
            _id: teacher._id,
        },
        {
            $push: {
                assignments: saveAssignment._id,
            },
        },
        {
            runValidators: true,
            new: true,
        }
    ).populate("assignments")
    .populate("course");

    console.log(updatedTeacher, "savedTeacher");

    //Saving assignments in each students document
    const students = await Student.find({});

    for (let i = 0; i < students.length; i++) {
        students[i].assignments.push(saveAssignment._id);

        const savedStudent = await students[i].save();

        console.log(savedStudent, "savedStudent");
    }

    sendResponse(updatedTeacher, "assignment uploaded", res);
});

// @desc Teacher details
// @route POST /teacher/getTeacher
// @access Private

module.exports.getTeacher = asyncHandler(async (req, res) => {
    const teacher = await Teacher.findById({
        _id: req.teacher._id,
    })
        .populate({
            path: "assignments",
            populate: {
                path: "assignmentsSubmitted.givenBy",
            },
        })

    console.log(teacher, "teacher");

    sendResponse(teacher, "teacher data fetched successfully", res);
});

// @desc Grade Assignment
// @route POST /teacher/gradeAssignment
// @access Private

module.exports.gradeAssignment = asyncHandler(async(req,res) => {
    const {grade,assignmentId,studentId} = req.body;

    const assignment = await Assignments.findById({
        _id:assignmentId
    })

    const index = assignment.assignmentsSubmitted.findIndex((assignment) => {
        console.log(assignment.givenBy,"givennn");
        return assignment.givenBy.toString() === studentId.toString()
    })

    console.log(index,"index");
    
    const newData = {
        ...assignment.assignmentsSubmitted[index],
        grade:grade
    }

    assignment.assignmentsSubmitted[index] = newData;

    console.log(assignment,"assignment");

    const saveAssignment = await assignment.save();

    sendResponse(saveAssignment,"Graded",res);

})