const express=require("express")
const router=express.Router()

const {createTask,getTasks,updateTask,deleteTask}=require("../controllers/taskController")

router.post("/", createTa)