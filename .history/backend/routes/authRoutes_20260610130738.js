const express=require("express");


const router=express.Router();

router.post("/register",(req,res)=>{
    res.send("Register route")
})
router.post("/Login",(req,res)=>{
    res.send("Login route")
})
router.post