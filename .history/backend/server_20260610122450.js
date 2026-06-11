const express=require("express")
const dotenv
const app=express()
const cors=require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Server is running!")
})
PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("server is running on port " + PORT)
})