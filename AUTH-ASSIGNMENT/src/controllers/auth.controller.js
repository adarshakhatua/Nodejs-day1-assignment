
const User =require("../models/user.model");
var jwt = require('jsonwebtoken');
require('dotenv').config()


const register= async(req,res)=>{
    try{
        const email=await User.findOne({email:req.body.email});
        if(email){
           return res.status(400).send({message:"email is already registered"});
        }
        const user= await User.create(req.body);
        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
}


function generateToken(user){
    var token = jwt.sign({ user }, process.env.KEY);
    return token;
}


const login =async(req,res)=>{
try{
    const user =await User.findOne({email:req.body.email});
    if(!user){
        res.status(400).send({message:"email is wrong"})
    }
    const password=user.checkPassword(req.body.password)
    if(!password){
        res.status(400).send({message:"password is wrong"})
    }

    const token =generateToken(user);
    res.status(200).send({user:user,token:token})

}
catch(err){
    res.status(500).send({message:err.message})
}
}



module.exports = {register,login};


