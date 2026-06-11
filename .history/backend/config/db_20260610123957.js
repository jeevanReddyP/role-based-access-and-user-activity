
const mongoose =requires("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_UR)
    } catch (error) {
        
    }
}