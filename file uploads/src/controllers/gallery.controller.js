const Gallery =require("../models/gallery.model");
var fs = require('fs');


const express= require("express");
const router=express.Router();
const upload=require("../middleware/fileUpload");


router.get("",async(req,res)=>{
    try{
     
        const gallery=await Gallery.find().lean().exec();
        return res.status(200).send(gallery);
    }
    catch(err){
      return  res.status(500).send({message:err.message});
    }
})



router.post("/:id",upload.array("images",5),async(req,res)=>{
    
    try{
        const imagesPath= req.files.map((file)=>{return file.path})
        console.log(imagesPath)
        const gallery =await Gallery.create({
            user_id:req.params.id,
            images:imagesPath
        });
        return res.status(201).send(gallery);
    }
    catch(err){
      return  res.status(500).send({message:err.message});
    }
})


router.delete("/:userId",async(req,res)=>{
    
    try{    
        const imagesPath= await Gallery.find({user_id:req.params.userId}).lean().exec();
        imagesPath[0].images.forEach((elem)=>{
            fs.unlink(elem, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            });
            console.log(elem)})
        //console.log(imagesPath[0].images)
        const id=imagesPath[0]._id   
        
        const gallery =await Gallery.findByIdAndDelete(id);

        return res.status(200).send(gallery);
    }
    catch(err){
      return  res.status(500).send({message:err.message});
    }
})



module.exports= router;

