const mongoose =require("mongoose");

const connect=()=>{
    mongoose.connect("mongodb+srv://adarshakhatua:2HPHZpSHYkfHit0a@cluster0.9f3au.mongodb.net/fileUpload");
}


module.exports=connect;