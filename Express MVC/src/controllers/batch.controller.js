const Batch =require("../models/batch.model");

const express= require("express");
const router = express.Router();

router.get("",async(req,res)=>{
    try{
        const batch =await Batch.find().lean().exec();
        res.status(200).send(batch);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.post("",async(req,res)=>{
    try{
        const batch =await Batch.create(req.body);
        res.status(200).send(batch);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


module.exports = router;
