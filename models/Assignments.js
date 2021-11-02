const mongoose = require("mongoose");
const schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const assignmentsSchema = new schema({
    givenBy: {
        type: ObjectId,
        ref: "Teacher",
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    assignmentGiven: {
        type: String,
    },
    uploadDate: {
        type: Date,
    },
    deadline: {
        type: Date,
    },
    assignmentsSubmitted: [
        {
            givenBy: {
                type: Number,
                ref: "Student",
            },
            assignment: {
                type: String,
            },
            dateSubmitted: {
                type: Date,
            },
        },
    ],
});

const Assignments = mongoose.model("Assignments", assignmentsSchema);
module.exports = Assignments;
