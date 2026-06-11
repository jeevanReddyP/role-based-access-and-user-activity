const jwt=require("jsonwebtoken")

const adminMiddleware=(req,res,next)=>{
    const token=req.header("Authorization")?.replace("Bearer ",'')
    if(!token) return res.status(400).json({message:"access denied, no token provided"})
        try{
         const decoded=jwt.verify(token,process.env.JWT_SECRET)
         if(decoded.role!=="admin") return res.status(403).json({message:"access denied, admin only"})
            req.user=decoded
        next()
        }
        catch(error){
            res.status()
        }
}