const Evaluation =require("../models/evaluation.model");

const express= require("express");
const Student = require("../models/student.model");
const Submission = require("../models/submission.model");
const User = require("../models/user.model");
const router = express.Router();

router.get("",async(req,res)=>{
    try{
        const evaluation =await Evaluation.find().populate("batch_id").lean().exec();
        res.status(200).send(evaluation);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

router.get("/:Id",async(req,res)=>{
    try{
        const evaluation= await Evaluation.findById(req.params.Id).lean().exec()
        res.status(200).send(evaluation);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})
//************************fetch all students who gave a particular evaluation************************************\\
router.get("/:Id/students",async(req,res)=>{
    try{
        const evaluation= await Evaluation.findById(req.params.Id).lean().exec()
        //console.log(evaluation.batch_id.toString())
        const student= await Student.find({batchId:evaluation.batch_id.toString()})
        res.status(200).send(student);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

//*********************************fetch the student with his personal details who scored the highest marks in the evaluation***************************************//
router.get("/:Id/highest",async(req,res)=>{
    try{
        const evaluation= await Evaluation.findById(req.params.Id).lean().exec();
        //console.log(evaluation)
        const submission= await Submission.find({evaluation_id:evaluation._id.toString()}).sort({marks:-1}).limit(1).lean().exec();
        //console.log(submission[0])
        const student =await Student.findById(submission[0].student_id.toString());
        //console.log(student)
        const user =await User.findById(student.userId)
        //console.log(user)
        res.status(200).send({marks:submission[0].marks,user:user});
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

router.post("",async(req,res)=>{
    try{
        const evaluation =await Evaluation.create(req.body);
        res.status(200).send(evaluation);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


module.exports = router;
