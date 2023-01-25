const express=require("express");
const User=require("../models/user");
const jwt=require("jsonwebtoken");
const router=express.Router();

router.post("/signup",function(req,res){
    var user=new User({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:req.body.password,role:"user"});
    User.findOne({email:req.body.email},function(err,found){
        if(found){
            res.status(400).send({message:"User already exist with given email"})
        }
        else{
            user.save().then(function(user){
                if(user){
                    res.status(200).send(user);
                }
                else{
                    res.status(500).send({message:"Something went wrong while signup"});
                }
            })
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

router.get("/allusers",function(req,res){
    User.find().then(function(users){
        if(users){
            res.send(users);
        }
        else{
            res.status(500).send("Something went wrong while fetching users list");
        }
    })
})

module.exports=router;