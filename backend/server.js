const bodyParser = require("body-parser");
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

var app=express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/leave_app");
var jsonParser=bodyParser.json();
app.use(bodyParser.json());


const userRoutes=require("./routes/user");
app.use("/user",jsonParser,userRoutes);

const userLeaveRoutes=require("./routes/userleave");
app.use("/userleave",jsonParser,userLeaveRoutes);

app.get("/",jsonParser,function(req,res){
    res.send("Server running");
})
app.listen(5000,function(){
    console.log("Server Running at localhost:5000");
})