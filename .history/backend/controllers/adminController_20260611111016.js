const user=require("../models/User")
const authMiddleware=require("../middelware/authMiddleware")
const adminMiddleware=require("../middleware/adminMiddleware")
const express=require("express")
const router=express.Router()

router.get("/users",authMiddleware,adminMiddleware,async(req,res)=>{
    try{
        
    }
})