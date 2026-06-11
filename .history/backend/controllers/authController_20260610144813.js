const User=require("../models/User")
const bcypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const Register= async (req,res)=>{
const {username,email,password,role} = req.body
if(!username||!password||!email||!role)
{
    return res.status(400).json({message:"please provide all the required fields"})
}
if(role!=="user"&&role!=="admin") return res.status(400).json({message:"role must be either user or admin"})

if(password.length<6) return res.status(400).json({message:"password must be at least 6 characters long"})
const salt=await bcrypt.genSalt(10)
const pass=await bcrypt.hash(password, salt)
if(role==="admin"){

}

}


const Login= async (req,res)=>{
    const {email,password}=req.body
    if(!email||!password) return res.status(400).json({message:"please provide email and password"})

    const user=await User.findOne({email})
    if(!user) return res.status(400).json({message:"invalid email or password"})
   const isMatch=await bcrypt.compare(password,user.password)
if(!isMatch) return res.status(400).json({message:"invalid email or password"})
    const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"})
     res.status(200).json({token}
}


module.exports={Register,Login}