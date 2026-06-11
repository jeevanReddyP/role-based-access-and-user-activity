const express=require("express");
const {Register,Login}=require

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
router.get("/user",(req,res)=>{
    res.send("user route")
})
router.get("/admin",(req,res)=>{
    res.send("admin route")
})
 
module.exports=router;