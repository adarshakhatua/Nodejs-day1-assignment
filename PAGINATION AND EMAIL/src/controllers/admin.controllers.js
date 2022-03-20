const express =require("express");
const Admin =require("../models/admin.model");
const { body, validationResult } = require('express-validator');

const router =express.Router();


router.get("",async(req,res)=>{
    try{
        const page =req.query.page || 1;
        const pagesize=req.query.pagesize || 10;

        const skip =(page-1)*pagesize;
        const totalcount =await Admin.find().countDocuments().lean().exec();
        const totalpage =Math.ceil(totalcount/pagesize)

        const admin = await Admin.find().skip(skip).limit(pagesize).lean().exec();
        res.status(200).send({Admin:admin,Total_page:totalpage})
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.post("",
body("first_name").not().isEmpty(),
body("email").isEmail().custom(async(value)=>{
    const admin=await Admin.findOne({email:value});
    if(admin){
        throw new Error("Email is already taken")
    }
    return true
}),
body("password").isStrongPassword().withMessage("password is weak please choose a strong password"),
async(req,res)=>{
    try{

        const admin = await Admin.create(req.body);
        res.status(201).send(admin)

     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
       
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


module.exports =router;
