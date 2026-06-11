const mongoose=require("mongoose")

const activeLogSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.Object
    }
})