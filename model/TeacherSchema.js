const mongoose = require("mongoose");
const  TeacherSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    subject:{
        type:String,
        required:true,
    }
})

const Teacher = mongoose.model("Teacher",TeacherSchema)
module.exports = Teacher
