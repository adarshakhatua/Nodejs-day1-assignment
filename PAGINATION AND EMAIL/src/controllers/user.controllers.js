const express =require("express");
const User =require("../models/user.model");
const Admin =require("../models/admin.model");
 const transporter = require("../node.mail");
const { body, validationResult } = require('express-validator');

const router =express.Router();


router.get("",async(req,res)=>{
    try{
        const page =req.query.page || 1;
        const pagesize=req.query.pagesize || 10;

        const skip =(page-1)*pagesize;
        const totalcount =await User.find().countDocuments().lean().exec();
        const totalpage =Math.ceil(totalcount/pagesize)

        const user = await User.find().skip(skip).limit(pagesize).lean().exec();
        res.status(200).send({user:user,Total_page:totalpage})
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.post("",
body("first_name").not().isEmpty(),
body("email").isEmail().custom(async(value)=>{
    const user=await User.findOne({email:value});
    if(user){
        throw new Error("Email is already taken")
    }
    return true
}),
body("password").isStrongPassword().withMessage("password is weak please choose a strong password"),
async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const email =req.body.email;
        const first_name=req.body.first_name;
        const last_name=req.body.last_name;

            await transporter.sendMail({
            from: `"Adarsha Khatua 👻" <ABC@example.com>`, // sender address
            to: email, // list of receivers
            subject: `Welcome to ABC system ${first_name} ${last_name}`, // Subject line
            text: ` Hi ${first_name}, Please confirm your email address`, // plain text body
          });

          const admin=await Admin.find().limit(5).lean().exec();
          const emails=admin.reduce((a,b)=>{return a+b.email+",";},"").slice(0,-1);
          //console.log(emails) 

       await transporter.sendMail({
        from: `"System Register 👻" <ABC@example.com>`, // sender address
        to: emails, // list of receivers
        subject: `${first_name} ${last_name} has registered with us`, // Subject line
        text: `Please welcome ${first_name} ${last_name}`, // plain text body
     })

        


        //console.log(body("name"))
        const user = await User.create(req.body);
        res.status(201).send(user)
       
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


module.exports =router;
