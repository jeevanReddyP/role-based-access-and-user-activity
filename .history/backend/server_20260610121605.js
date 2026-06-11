const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Server is running!")
})

app.listen(PORT,()=>{
    console.log("server is ")
})