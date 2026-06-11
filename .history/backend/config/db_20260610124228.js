
const mongoose =requires("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI{
            useNewUrlparser:true,
            useUnifiedTopology:true,
        })
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error("MongoDB connection faile")
    }
}