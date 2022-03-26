const mongooes= require("mongoose");

const connect =()=>{
    return mongooes.connect("mongodb+srv://adarshakhatua:2HPHZpSHYkfHit0a@cluster0.9f3au.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}


module.exports=connect;