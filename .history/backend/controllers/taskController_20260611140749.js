const ActvityLog=require("../models/ActivityLog")
const Task=require("../models/Task")

const CreateTask=async(req,res)=>{
    try{
        const {title,description}=req.body
        if(!title||!description) return res.status(400).json({message:"please provide title and description"})
        const newTask=
    }
}
