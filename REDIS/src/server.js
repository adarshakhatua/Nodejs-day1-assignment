const app=require("./index");
const connect =require("./configs/db")


app.listen(5000,async(req,res)=>{
    await connect();
    console.log("listening at port:5000");
})