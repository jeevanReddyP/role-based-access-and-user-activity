    const jwt=require("jsonwebtoken")

    const authmiddleware=(req,res,next)=>{
        const token=req.header("Authorization")?.replace("Bearer ", "")
        if(!token) return res.status(401).json({message:"access denied, no token provided"})
        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            req.user=decoded
            next()
        } catch (error) {
            res.status(401).json({message:"invalid token"})
        }
    }

    module.exports=authmiddleware