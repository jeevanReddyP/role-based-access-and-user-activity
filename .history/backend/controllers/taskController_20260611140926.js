const ActvityLog=require("../models/ActivityLog")
const Task=require("../models/Task")

const CreateTask=async(req,res)=>{
    try{
        const {title,description}=req.body
        if(!title||!description) return res.status(400).json({message:"please provide title and description"})
        const newTask=await Task.create({title,description,user:req.user.id})
       await ActivityLog.create({user:req.user.id,action:"Task Created",task:newTask._id})
       res
    }
}
