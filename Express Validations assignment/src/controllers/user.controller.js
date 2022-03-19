const User =require("../models/user.model");

const express= require("express");
const { body, validationResult } = require('express-validator');
const req = require("express/lib/request");

const router = express.Router();

router.post("",
body("first_name").trim().not().isEmpty().withMessage("First name is required, can not be empty").isString().withMessage("First name shoulld be string only"),
body("last_name").trim().not().isEmpty().withMessage("Last name is required, can not be empty").isString().withMessage("Last name shoulld be string only"),
body("email").isEmail().withMessage("Email should be in a valis format").not().isEmpty().withMessage("email is required, can not be empty").custom(async(value)=>{
    const user =await User.findOne({email:value});
    if(user){
        throw new Error("Email is already taken")
    }
    return true;
}),
body("pincode").not().isEmpty().withMessage("pin code is required, can not be empty").isNumeric().withMessage("pin code should be numbers only").isLength({min:6}).isLength({max:6}).withMessage("pin code length should be exactly 6"),
body("age").not().isEmpty().withMessage("age is required, can not be empty").isNumeric().withMessage("age should be numbers only").custom(async(value)=>{
    if(value<1 ||value>100){
        throw new Error("Age should be between 1 and 100")
    }
    return true;
}),
body("gender").not().isEmpty().withMessage("gender is required, can not be empty").isString().withMessage("gender  should be string only").custom(async(value)=>{
    if(value==="Male" || value==="Female"||value==="Others"){
        return true;
        
    }
    else{
        throw new Error("gender can only be Male or Female or Others")
    }
    
}),

async(req,res)=>{
    try{
        console.log(body("first_name"))
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const user =await User.create(req.body)
        res.status(201).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


module.exports =router;