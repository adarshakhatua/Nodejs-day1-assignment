const Student = require("../models/student.model");

const express= require("express");
const router = express.Router();

router.get("",async(req,res)=>{
    try{
        const student =await Student.find().lean().exec();
        res.status(200).send(student);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.post("",async(req,res)=>{
    try{
        const student =await Student.create(req.body);
        res.status(200).send(student);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports=router;