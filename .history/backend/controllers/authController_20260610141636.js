const { pass } = require("three/tsl")


const Register= async (req,res)=>{
const {username,password,role} = await req.body
if(!username||!password)
{
    return res.status(400).json({message:"please provide username and password"})
}
if(role!=="user"&&role!=="admin"){}
}



const Login= async (req,res)=>{

}


module.exports={Register,Login}