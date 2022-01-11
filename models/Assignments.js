const mongoose = require("mongoose");
const schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const assignmentsSchema = new schema({
    givenBy: {
        type: ObjectId,
        ref: "Teacher",
    },
    // courseCode:{
    //     type:String
    // },
    assignmentId:{
        type:String
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
    keywords:[
        {
            type:String
        }
    ],
    keywordsSummary:[
        {
            type:Object
        }
    ],
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
            grade:{
                type:Number,
                default:0
            }
        },
    ],
});

const Assignments = mongoose.model("Assignments", assignmentsSchema);
module.exports = Assignments;
