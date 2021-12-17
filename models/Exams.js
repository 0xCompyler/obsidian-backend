const mongoose = require("mongoose");
const schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const examSchema = new schema({
    givenBy: {
        type: ObjectId,
        ref: "Teacher",
    },
    examId:{
        type:String
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    examGiven: {
        type: String,
    },
    uploadDate: {
        type: Date,
    },
    deadline: {
        type: Date,
    },
    answersSubmitted: [
        {
            givenBy: {
                type: Number,
                ref: "Student",
            },
            answer: {
                type: String,
            },
            dateSubmitted: {
                type: Date,
            }
        },
    ],
});

const Exams = mongoose.model("Exams", examSchema);
module.exports = Exams;
