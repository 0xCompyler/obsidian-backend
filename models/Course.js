const mongoose = require("mongoose");
const schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

const coursesSchema = new schema({
    _id:{
        type:String
    },
    courseOf:{
        type:ObjectId,
        ref:"Teacher"
    },
    credits:{
        type:Number
    },
    handout:{
        type:String
    },
    name:{
        type:String
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    days:[{
        type:String
    }]
});

const Courses = mongoose.model("Courses", coursesSchema);
module.exports = Courses;
