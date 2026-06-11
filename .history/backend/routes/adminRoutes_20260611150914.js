const express=require("express")
const router=express.Router()

const {getAllUsers,updateUserStatus,deleteUser,getAllTasks,deleteTask}=require("../controllers/adminController")

router.get("/users", getAllUsers)
router.patch("/users/:id/status", updateUserStatus)
router.delete("/users/:id", deleteUser)
router.get("/tasks", getAllTasks)
router.delete("/tasks/:id", deleteTask)

module.exports=rout