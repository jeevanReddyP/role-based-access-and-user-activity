
const mongoose =requires("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect()
    } catch (error) {
        
    }
}