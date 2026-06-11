const User=require("../models/User")
const bcypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const Register= async (req,res)=>{
const {username,password,role} = req.body
if(!username||!password)
{
    return res.status(400).json({message:"please provide username and password"})
}
if(role!=="user"&&role!=="admin") return res.status(400).json({message:"role must be either user or admin"})

if(password.length<6) return res.status(400).json({message:"password must be at least 6 characters Long"})
const salt=await 
const pass=await bcrypt.hash(password,)
if(role==="admin"){

}

}


const Login= async (req,res)=>{

}


module.exports={Register,Login}