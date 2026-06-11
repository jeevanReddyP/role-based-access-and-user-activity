const mongoose=require("mongoose")
const { string } = require("three/src/nodes/TSL.js")

const userSchema=new mongoose.Schema({
    username:{
        type:string,
        required:true,
    },
    password:{
        
    }
})