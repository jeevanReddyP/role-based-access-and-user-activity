const express=require("express")
const dotenv=require("dotenv")
const app=express()
const connectDB=require("./config/db")
const cors=require("cors")
const authRoutes=require("../Backend/routes/authRoutes")
const 
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Server is running!")
})
dotenv.config()
connectDB()
//routes
app.use("/api/auth",authRoutes)
app.use("/api/user",)
app
PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})