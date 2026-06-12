📌 Role Based Access & User Activity Management System
🚀 Project Overview

This is a full-stack MERN application built for managing users and tasks with Role-Based Access Control (RBAC) and Activity Tracking System.

The system supports:

👤 User authentication (Login/Register)
🔐 Role-based access (Admin / User)
📝 Task management system
📊 Admin analytics dashboard
📜 Activity logs tracking user actions
🧠 Tech Stack
Frontend:
React.js (Vite)
Axios
React Router DOM
Tailwind CSS
Backend:
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt.js
🎯 Features
👤 User Features
Register and login securely
Create tasks
View personal tasks
Mark tasks as completed
View task status (Pending / Completed)
🛡️ Admin Features
View all users
Delete users
Toggle user status (Active/Inactive)
View all tasks from all users
Mark tasks as completed
Delete tasks
View activity logs (who did what and when)
Analytics dashboard with:
Total users
Total tasks
Completed tasks
Pending tasks
📊 Activity Tracking System

Every important action is logged:

User login
Task creation
Task completion
Task deletion

This helps admins track system usage and user activity in real-time.

📁 Project Structure
backend/
  models/
  routes/
  controllers/
  middleware/
  config/
  server.js

frontend/
  src/
    pages/
      admin/
    components/
    api/
🔐 Authentication Flow
User registers / logs in
Server generates JWT token
Token stored in localStorage
Token sent in headers for protected routes
Middleware validates user & role access
📊 Admin Analytics

Admin dashboard shows:

Total Users
Total Tasks
Completed Tasks
Pending Tasks

This is calculated dynamically from MongoDB data.

⚙️ How to Run Project Locally
Backend
cd backend
npm install
npm start
Frontend
cd frontend
npm install
npm run dev
🌐 Environment Variables

Create .env file in backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
📌 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
Tasks
POST /api/tasks
GET /api/tasks/my
PUT /api/tasks/:id/complete
DELETE /api/tasks/:id
Admin
GET /api/admin/users
DELETE /api/admin/users/:id
PUT /api/admin/users/:id
GET /api/admin/tasks
DELETE /api/admin/tasks/:id
GET /api/admin/logs
📈 Future Improvements
Add charts (Recharts / Chart.js)
Real-time notifications (Socket.io)
Pagination for tasks & users
Email notifications
Advanced filtering (status, date, user)
👨‍💻 Author

Jeevan Reddy P
Full Stack Developer (MERN)

⭐ Project Goal

This project was built to demonstrate:

Role-based authentication system
Full-stack CRUD operations
Admin analytics dashboard
Activity logging system
Real-world scalable architecture
