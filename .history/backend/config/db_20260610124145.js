
const mongoose =requires("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI{
            useNewUrlparser:true,
            useUnifiedTopology:true,
        })
        console.log("Mongo")
    } catch (error) {
        
    }
}