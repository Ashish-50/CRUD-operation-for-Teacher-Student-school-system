const express = require("express");
const { reset } = require("nodemon");
const router = express.Router()
const Student = require("../model/studentSchema")
const Teacher = require("../model/TeacherSchema")


//getting all student
router.get("/student",async(req,res)=>{
    const allstudent = await Student.find()
    res.status(200).send(allstudent)
})

//getting all teacher
router.get("/teacher",async(req,res)=>{
    const allteacher = await Teacher.find()
    res.status(200).send(allteacher)
})


//adding student
router.post("/addstudent",async(req,res)=>{
    const addstudent = new Student(req.body)
    const savingstudent = await addstudent.save()
    console.log(savingstudent)
    res.send(`student added named ${req.body.name}`)
})


//adding teacher
router.post("/addteacher",async(req,res)=>{
    const addteacher = new Teacher(req.body)
    const savingteacher = await addteacher.save()
    console.log(savingteacher)
    res.send(`Teacher added named ${req.body.name}`)
})

//edit student with student id
router.put("/editstudent/:id",(req,res)=>{
    Student.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            class:req.body.class,
            section:req.body.section,
            assignedTeacher:req.body.assignedTeacher,
        }
    }).then(result=>{
        res.status(200).send("updation complete")
    }).catch((err)=>{
        res.status(500).send(err)
        console.log(err)
    })
})


// get teacher with subject name
router.get("/getteacher/:subject",async(req,res)=>{
    try{
        const findingteacher = await Teacher.findOne({subject:req.params.subject})
        res.send(findingteacher)
    }catch(err){
        console.log(err)
    }})


// get student with class class and section 
router.get("/getstudent/:class/:section",async(req,res)=>{
    try{
        const findingstudent = await Student.findOne({$and:[{class:req.params.class},{section:req.params.section}]})
        res.send(findingstudent)
    }catch(err){
        console.log(err)
    }})


// gett all the techer with assigneteacher id

router.get("/assignteacher/:id",async(req,res)=>{
    try{
        const assignedstudent = await Student.find({assignedTeacher:req.params.id})
        res.send(assignedstudent)
    }catch(err){
        console.log(err)
    }
})


module.exports = router