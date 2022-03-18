const express= require("express");

const app=express();

const userController= require("./controllers/user.controller")
const batchController= require("./controllers/batch.controller")
const studentController= require("./controllers/student.controller")
const evaluationConroller= require("./controllers/evaluation.controller")
const submissionContoller= require("./controllers/submission.controller")

app.use(express.json());

app.use("/users",userController)
app.use("/batches",batchController)
app.use("/students",studentController)
app.use("/evaluation",evaluationConroller)
app.use("/submission",submissionContoller)


module.exports =app;