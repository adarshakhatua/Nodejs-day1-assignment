const express=require("express")
const mongoose=require("mongoose")

const app=express();

const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/test",{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    });
};
const userSchema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    id:Number,
    gender:String,
    ip_address:String
})

const User= mongoose.model("user",userSchema);

app.get("/users",async(req,res)=>{
    const user=await User.find({id:"20"}).lean().exec();
    console.log(user);
    res.status(200).json({data:user})
})

const start= async()=>{
    await connect();
    app.listen(2233,()=>{
        console.log("listining on port 2233")
    })
};

start();
