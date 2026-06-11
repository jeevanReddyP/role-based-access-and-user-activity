const jwt=require("jsonwebtoken")

const adminMiddleware=(req,res,next)=>{
    const token=req.header("Authorization")?.replace
}