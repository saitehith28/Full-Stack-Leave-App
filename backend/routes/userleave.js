const express=require("express");
var UserLeave=require("../models/userLeave");
const router=express.Router();

router.post("/apply",function(req,res){
    var userLeave=new UserLeave(
        {
            reason:req.body.reason,
            status:"pending",
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            userName:req.body.userName,
            leaveType:req.body.type
        });
    userLeave.save().then(function(user){
        if(user){
            res.send(user);
        }
        else{
            res.status(500).send("Something went wrong while applying leave");
        }
    })
})

router.get("/:username/myleave",function(req,res){
    UserLeave.find({userName:req.params.username}).then(function(leaves){
        if(leaves){
            res.send(leaves);
        }
        else{
            res.status(500).send("Something went wrong while fetching leaves");
        }
    })
})

module.exports=router;