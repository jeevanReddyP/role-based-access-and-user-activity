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
        enum:["active","inactive"],
        default:"active",
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["user","admin"],
        default:"user"
    },
},{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema)