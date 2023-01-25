const express=require("express");
var UserLeave=require("../models/userLeave");
var User=require("../models/user");
const router=express.Router();

router.post("/apply",function(req,res){
    var userLeave=new UserLeave(
        {
            reason:req.body.reason,
            status:"pending",
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            userName:req.body.userName,
            leaveType:req.body.leaveType
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

router.get("/allleave",function(req,res){
    UserLeave.find().then(function(leaves){
        if(leaves){
            res.send(leaves);
        }
        else{
            res.status(500).send("Something went wrong while fetching leaves");
        }
    })
})

router.put("/:leaveId/approvereject",function(req,res){
    UserLeave.findByIdAndUpdate(req.params.leaveId,{status:req.body.status}).then(function(leave){
        if(leave){
            res.send(leave);
        }
        else{
            res.status(500).send("Something went wrong while fetching approving leaves");
        }
    })
})

module.exports=router;