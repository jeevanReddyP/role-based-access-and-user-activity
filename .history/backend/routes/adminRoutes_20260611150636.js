const express=require("express")
const router=express.Router()

const {getAllUsers,updateUserStatus,deleteUser,getAllTasks,deleteTask}=require("../controllers/adminController")

router