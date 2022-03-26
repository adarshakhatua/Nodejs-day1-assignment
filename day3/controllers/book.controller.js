const Book= require("../models/book.model");
const express= require("express");
const router=express.Router();

router.get("",async(req,res)=>{
    try{
        const book= await Book.find().lean().exec();
        res.status(200).send(book);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})


router.get("/:id",async(req,res)=>{
    try{
        const book= await Book.findById(req.params.id).lean().exec();
        res.status(200).send(book);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})

module.exports=router;