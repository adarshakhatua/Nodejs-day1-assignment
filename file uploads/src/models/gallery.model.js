const mongoose=require("mongoose");

const gallerySchema =new mongoose.Schema({
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
    images:[{type:String, required:false}],
})


const Gallery =mongoose.model("galleries",gallerySchema);

module.exports =Gallery;