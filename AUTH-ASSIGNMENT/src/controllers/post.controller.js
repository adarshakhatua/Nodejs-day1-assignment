const express =require("express");
const authanticate= require("../middleware/authantication")

const router =express.Router();
const Post =require("../models/post.model")




router.post("",authanticate,async(req,res)=>{
    try{
        const post =await Post.create(req.body);
        res.status(201).send(post);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.patch("/:id",authanticate,async(req,res)=>{
    try{
        const post =await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).send(post);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.delete("/:id",authanticate,async(req,res)=>{
    try{
        const post =await Post.findByIdAndDelete(req.params.id);
        res.status(201).send(post);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.get("/:id",authanticate,async(req,res)=>{
    try{
        const post =await Post.findById(req.params.id);
        res.status(200).send(post);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})






module.exports =router;