const app= require("./index");
const connect =require("./config/db")

app.listen(4422,async(req,res)=>{
    await connect();
    console.log("listening at port:4422");
})