const express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("Server running");
})
app.listen(5000,function(){
    console.log("Server Running at localhost:5000");
})