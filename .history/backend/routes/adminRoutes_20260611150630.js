const express=require("express")
const router=express.Router()

const {getAllUsers,updateUserStatus,deleteUser,getAllTasks,deleteTask}=require("../controllers/adminController")

GET    /api/admin/users
GET    /api/admin/users/:id
PUT    /api/admin/users/:id
PUT    /api/admin/users/:id/status
DELETE /api/admin/users/:id

GET    /api/admin/tasks
GET    /api/admin/users/:id/tasks
DELETE /api/admin/tasks/:id

GET    /api/admin/logs