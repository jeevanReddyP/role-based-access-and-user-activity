const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        length:6
    },
    status :{
        type:String,
        enum:["active","inactive"]
        
    }
    role:{
        type:String,
        required:true,
        enum:["user","admin"]
    },
},{
    timestamps:true
})

module.exports=mongoose.model("user",userSchema)