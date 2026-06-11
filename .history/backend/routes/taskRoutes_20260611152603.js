const express=require("express")
const router=express.Router()

const {
    CreateTask,
    GetMyTasks,
    UpdateTask,
    DeleteTask
}=require("../controllers/taskController")

router.post("/", CreateTask)
router.get("/", GetMyTasks)
router.put("/:id", UpdateTask)
router.delete("/:id", DeleteTask)

module.exports=router