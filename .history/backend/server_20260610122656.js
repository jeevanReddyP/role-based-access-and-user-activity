const express=require("express")
const dotenv=require("dotenv")
const app=express()
const cors=require("cors")
dotenv.config()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Server is running!")
})
//routes

PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server `)
})