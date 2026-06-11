
const mongoose =require("mongoose");

const connectDB=async()=>{
    try {
        await createConnectio(process.env.MONGO_URI,{
            useNewUrlparser:true,
            useUnifiedTopology:true,
        })
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error("MongoDB connection failed:",error.message)
    }
}
module.exports=connectDB