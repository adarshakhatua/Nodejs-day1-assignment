const express =require("express");

const usercontroller=require("./controllers/user.controller")

const app = express();

module.exports = app;


app.use(express.json());
app.use("/users",usercontroller);