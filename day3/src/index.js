const express =require("express")
const app=express()

const bookController= require("../controllers/book.controller");

app.use("/books",bookController)


module.exports=app;