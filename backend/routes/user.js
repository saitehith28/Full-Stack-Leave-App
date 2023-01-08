const express=require("express");
const User=require("../models/user");
const jwt=require("jsonwebtoken");
const router=express.Router();

router.post("/signup",function(req,res){
    var user=new User({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:req.body.password});
    user.save().then(function(user){
        if(user){
            res.send(user);
        }
        else{
            res.status(500).send("something went wrong while signup");
        }
    })
})

router.post("/login",function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            res.send(err);
        }
        if(!user){
            res.send("User Not Found");
        }
        else{
            if(user.password===req.body.password){
                const token=jwt.sign({id:user._id,email:user.email},"testkey")
                res.send({data:user,token:token});
            }
            else{
                res.send("Email/password is wrong");
            }
        }
    })
})

module.exports=router;