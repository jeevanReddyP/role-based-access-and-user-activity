const user=require("../models/User")
const authMiddleware=require("../middelware/authMiddleware")
const adminMiddleware=require("../middleware/adminMiddleware")
const express=require("express")
const router=express.Router()

router.get("/users",authMiddleware,adminMiddleware,async(req,res)=>{
    try{
        const users=await user.find().select("-password")
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({message:"internal server error"})
    }
})

 router.delete("/users/:id",authMiddleware,adminMiddleware,async(req,res)=>{
    try{
        const userId=req.params.id
        const deletedUser=await user.findByIdAndDelete(userId)
        if(!deletedUser) return res.status(404).json({message:"user not found"})
        res.status(200).json({message:"user deleted successfully"})
    }
    catch(error){
        res.status(500).json({message:"internal server error"})
    }
 })

 router.put("/users/:id",authMiddleware,adminMiddleware,async(req,res)=>{
    try{
        const userId=req.params.id
        const {username,email,role}=req.
    }
 })
module.exports=router