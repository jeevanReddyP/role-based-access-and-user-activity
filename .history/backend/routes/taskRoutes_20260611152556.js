const express=require("express")
const router=express.Router()

const {
    CreateTask,
    GetMyTasks,
    UpdateTask,
    DeleteTask
}=require("../controllers/taskController")

router.post("/", createTask)
router.get("/", getTasks)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports=router