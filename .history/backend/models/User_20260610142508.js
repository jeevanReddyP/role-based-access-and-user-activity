const mongoose=require("mongoose")
const { string } = require("three/src/nodes/TSL.js")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        length:6
    },
    role:{
        type:String,
        required:true,
        enum:["user","admin"]
    },
},{
    timestamps:true
})

module.exports=mongoose.model("")