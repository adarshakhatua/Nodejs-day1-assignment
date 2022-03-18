const Submission =require("../models/submission.model");

const express= require("express");
const router = express.Router();

router.get("",async(req,res)=>{
    try{
        const submission =await Submission.find().lean().exec();
        res.status(200).send(submission);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.post("",async(req,res)=>{
    try{
        const submission =await Submission.create(req.body);
        res.status(200).send(submission);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports = router;