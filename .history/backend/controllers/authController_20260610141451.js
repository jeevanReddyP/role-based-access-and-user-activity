const { pass } = require("three/tsl")


const Register= async (req,res)=>{
const {username,password} = await req.body
if(!username||!password)
{
    return res.status(400).jsom()
}}
const Login= async (req,res)=>{

}


module.exports={Register,Login}