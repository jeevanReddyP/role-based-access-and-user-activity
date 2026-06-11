const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
const connectDB=require("./config/db")
const cors=require("cors")
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const taskRoutes = require("./routes/taskRoutes");
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Server is running!")
})
connecte
//routes
app.use("/api/auth",authRoutes)
// app.use("/api/admin",adminRoutes)
// app.use("/api/task",taskRoutes)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})