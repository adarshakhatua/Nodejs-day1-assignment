const connect =require("./config/db");
const app= require("./index");

app.listen(5000,async()=>{
    await connect();
    console.log("listening at port :5000")
})