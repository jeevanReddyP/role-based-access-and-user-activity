const jwt=require("jsonwebtoken")

const adminMiddleware=(req,res,next)=>{
    const token=req.header("Authorization")?.replace("Bearer ",'')
    if(!token) return res.status(400).json({message:"access denied, no "})
}