const user = require("../models/User")
const authMiddleware = require("../middelware/authMiddleware")
const adminMiddleware = require("../middleware/adminMiddleware")
const express = require("express")
const router = express.Router()
const Task = require("../models/Task")
const ActivityLog = require("../models/ActivityLog")
router.get("/users", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const users = await user.find().select("-password")
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

router.delete("/users/:id", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const userId = req.params.id
        const deletedUser = await user.findByIdAndDelete(userId)
        if (!deletedUser) return res.status(404).json({ message: "user not found" })
        res.status(200).json({ message: "user deleted successfully" })
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

router.put("/users/:id", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const userId = req.params.id
        const { username, email, role } = req.body
        if (role && role !== "user" && role !== "admin") return res.status(400).json({ message: "role must be either user or admin" })
        const updatedUser = await user.findByIdAndUpdate(userId, { username, email, role }, { new: true }).select("-password")
        if (!updatedUser) return res.status(404).json({ message: "user not found" })
        res.status(200).json(updatedUser)
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

router.get("/users/:id", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const userId = req.params.id
        const foundUser = await user.findById(userId).select("-password")
        if (!foundUser) return res.status(404).json({ message: "user not found" })
        res.status(200).json(foundUser)
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

router.put("/users/:id/status", authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const userId = req.params.id
        const foundUser = await user.findById(userId)
        if (!foundUser) return res.status(404).json({ message: "user not found" })
        const newStatus = foundUser.status === "active" ? "inactive" : "active"
        await user.findByIdAndUpdate(userId, { status: newStatus }, { new: true })
        res.status(200).json({ status: newStatus })
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
})

router.get("/users/:id/tasks",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {

            const foundUser = await user.findById(req.params.id)

            if (!foundUser) {
                return res.status(404).json({
                    message: "user not found"
                })
            }

            const tasks = await Task.find({
                user: req.params.id
            })

            res.status(200).json(tasks)

        } catch (error) {
            res.status(500).json({
                message: "internal server error"
            })
        }
    })
router.get("/tasks",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {

            const tasks = await Task.find()
                .populate("user", "username email")

            res.status(200).json(tasks)

        } catch (error) {
            res.status(500).json({
                message: "internal server error"
            })
        }
    })

router.delete("/tasks/:id",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {
            const deletedTask = await Task.findByIdAndDelete(
                req.params.id
            )

            if (!deletedTask) {
                return res.status(404).json({
                    message: "task not found"
                })
            }
            await ActivityLog.create({
                user: req.user.id,
                action: "Admin Deleted Task"
            })
            res.status(200).json({
                message: "task deleted successfully"
            })

        } catch (error) {
            res.status(500).json({
                message: "internal server error"
            })
        }
    })

    
module.exports = router