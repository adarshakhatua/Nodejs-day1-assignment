const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    rollNumber: {type:Number, required:true,unique:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true,unique:true},
    batchId:{type:mongoose.Schema.Types.ObjectId, ref:"batch", required:true},
},
{
    versionKey:false,
    timestamps:true,
})

const Student =mongoose.model("student",studentSchema);

module.exports = Student;