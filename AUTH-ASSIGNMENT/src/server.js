const app= require("./index");
const connect= require("./configs/db")

app.listen(4000, async()=>{
    await connect();
    console.log("listening at port:4000");
})
