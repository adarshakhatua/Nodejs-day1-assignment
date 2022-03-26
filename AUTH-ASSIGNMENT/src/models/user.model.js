const mongoose =require("mongoose");
const bcrypt = require('bcrypt');



const userSchema =new mongoose.Schema({
    name: {type: String, required: true,},
    email: {type: String, required: true, unique: true,},
    password: {type: String, require: true,},
},
{
    versionKey:false,
    timestamps:true,
})

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 10);
    this.password=hash;
    return next();
})

userSchema.methods.checkPassword =async function(password){
//   return  bcrypt.compareSync(password, this.password);

await new Promise((res,rej)=>{

    bcrypt.compare(password, this.password, function(err, result) {
        // result == true
        if(err){
            return rej(err);
        }
        else{
            return res(result);
        }
    });
})
}


const User =mongoose.model("user",userSchema);
module.exports =User;
 