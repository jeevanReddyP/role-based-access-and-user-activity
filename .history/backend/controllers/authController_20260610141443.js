const { pass } = require("three/tsl")


const Register= async (req,res)=>{
const {username,password} = await req.body
if(!username||!password)
{
    return res.st
}}
const Login= async (req,res)=>{

}


module.exports={Register,Login}