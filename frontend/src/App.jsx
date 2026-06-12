import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import UserManagement from "./pages/admin/UserManagement";
import TaskMonitoring from "./pages/admin/TaskMonitoring";
import ActivityLogs from "./pages/admin/ActivityLogs";
import Analytics from "./pages/admin/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/tasks" element={<TaskMonitoring />} />
        <Route path="/admin/logs" element={<ActivityLogs />} />
        <Route path="/admin/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
