const express =require("express");
const User =require("../models/user.model");
var fs = require('fs');

const router=express.Router();
const upload=require("../middleware/fileUpload");


router.get("",async(req,res)=>{
    try{
        const user=await User.find().lean().exec();
        return res.status(200).send(user);
    }
    catch(err){
      return  res.status(500).send({message:err.message});
    }
})


router.post("",upload.single("profile_pic"),async(req,res)=>{
    try{
        const user =await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profile_pic:req.file.path
        });
        return res.status(200).send(user);
    }
    catch(err){
      return  res.status(500).send({message:err.message});
    }
})



router.patch("/:id",upload.single("profile_pic"),async(req,res)=>{
    try{
        const imagePath =await User.findById(req.params.id).lean().exec();
        const image=imagePath.profile_pic;
        //console.log(image)
        fs.unlink(image, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');
        });

        const user =await User.findByIdAndUpdate(req.params.id,{
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            profile_pic:req.file.path
        },{new:true});
       
        return res.status(200).send(user);  
    }
    catch(err){
      return  res.status(500).send({message:err.message});
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        const imagePath =await User.findById(req.params.id).lean().exec();
        const image=imagePath.profile_pic;
        //console.log(image)
        fs.unlink(image, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');
        });

        const user =await User.findByIdAndDelete(req.params.id);
       
        return res.status(200).send({user});  
    }
    catch(err){
      return  res.status(500).send({message:err.message});
    }
})





module.exports =router;
