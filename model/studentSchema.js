const mongoose = require("mongoose");
const  StudentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    class:{
        type:Number,
        required:true,
    },
    section:{
        type:String,
        required:true,
    },
    assignedTeacher:{
        type:String,
    }
})

const Student = mongoose.model("Student",StudentSchema)
module.exports = Student
