const express =require("express");

const app =express();

const productControllers= require("./controllers/product.controller")

app.use(express.json());
app.use("/products", productControllers);


module.exports =app;