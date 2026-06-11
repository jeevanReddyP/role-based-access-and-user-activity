const express=require("express");


const router=express.Router();

router.post("/register",(req,res)=>{
    res.send("Register route")
})
router.post("/Login",(req,res)=>{
    res.send("Login route")
})
router.post("/Logout",(req,res)=>{
    res.send("Logout route")
})
router.get("/profile",(req,res)=>{
    res.send("profile route")
})
router.get()