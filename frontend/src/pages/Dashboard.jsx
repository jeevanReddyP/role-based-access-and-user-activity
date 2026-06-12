import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const url =
        role === "admin"
          ? "http://localhost:5000/api/admin/tasks"
          : "http://localhost:5000/api/tasks/my";

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching tasks:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const completeTask = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/admin/tasks/${id}/complete`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? { ...task, status: "completed" } : task
        )
      );
    } catch (err) {
      console.log("Error completing task:", err);
    }
  };

  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.filter((t) => t.status === "pending").length;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Task Management Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">Welcome 👋</h2>
        <p className="text-gray-600 mb-6">Role: {role}</p>

        {role === "admin" && (
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-6 rounded shadow">
              Total Tasks
              <p className="text-3xl font-bold">{total}</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              Completed
              <p className="text-3xl font-bold text-green-600">
                {completed}
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              Pending
              <p className="text-3xl font-bold text-yellow-600">
                {pending}
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <p>Loading...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-5 rounded-xl shadow border"
              >
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-lg font-bold">{task.title}</h4>
                    <p className="text-gray-600">{task.description}</p>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.status || "pending"}
                  </span>
                </div>

                {role === "admin" && task.status !== "completed" && (
                  <button
                    onClick={() => completeTask(task._id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded mt-4"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;