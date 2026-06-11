const User=require("../models/User")
const bcypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const Register= async (req,res)=>{
try

}


const Login= async (req,res)=>{
   try {
     const {email,password}=req.body
     if(!email||!password) return res.status(400).json({message:"please provide email and password"})
 
     const user=await User.findOne({email})
     if(!user) return res.status(400).json({message:"invalid email or password"})
    const isMatch=await bcrypt.compare(password,user.password)
 if(!isMatch) return res.status(400).json({message:"invalid email or password"})
     const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"})
      res.status(200).json({token})
   } catch (error) {
    res.status(500).json({message:"server error"})
   }
}


module.exports={Register,Login}