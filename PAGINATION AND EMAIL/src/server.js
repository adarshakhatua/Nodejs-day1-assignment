
const connect=require("./config/db")
const app=require("./index")

 app.listen(4000,async()=>{
    await connect()
    console.log("listening at port:4000");
})

