import { useEffect, useState } from "react";
import API from "../../api/axios";

const TaskMonitoring = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/admin/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/admin/tasks/${id}`);
    fetchTasks();
  };

  const markComplete = async (id) => {
    await API.put(`/admin/tasks/${id}/complete`);
    fetchTasks();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Task Monitoring</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <div key={task._id} className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p>{task.description}</p>

            <p className="mt-2 font-semibold">
              {task.status}
            </p>

            {task.status !== "completed" && (
              <button
                onClick={() => markComplete(task._id)}
                className="bg-green-500 text-white px-3 py-2 rounded mt-3 mr-2"
              >
                Complete
              </button>
            )}

            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-3 py-2 rounded mt-3"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskMonitoring;