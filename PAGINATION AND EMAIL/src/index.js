const express = require("express");


const app =express();

const userController =require("./controllers/user.controllers");
const adminController =require("./controllers/admin.controllers");



app.use(express.json())
app.use("/users",userController)
app.use("/admins",adminController)

module.exports=app;





















