const express= require("express");

const app=express();

const userController =require("./controllers/user.controllers");
const galleryContoller =require("./controllers/gallery.controller");

app.use(express.json());
app.use("/users", userController);
app.use("/gallery", galleryContoller);


module.exports=app;
