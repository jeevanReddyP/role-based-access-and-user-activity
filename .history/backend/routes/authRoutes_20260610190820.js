const express=require("express");
const {Register,Login}=require("../controllers/authController")

const router=express.Router();

router.post("/register",Register)
router.post("/login",Login)
router.post("/Logout",(req,res)=>{
    res.send("Logout route")
})
router.get("/user",(req,res)=>{
    res.send("user route")
})
router.get("/admin",(req,res)=>{
    res.send("admin route")
})
 
module.exports=authRouter
