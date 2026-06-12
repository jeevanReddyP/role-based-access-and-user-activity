import { useEffect, useState } from "react";
import API from "../api/axios";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await API.get("/tasks/my");
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>

      {tasks.map((task) => (
        <div key={task._id} className="bg-white p-4 mb-2 rounded shadow">
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>

          <span
            className={
              task.status === "completed"
                ? "text-green-600 font-bold"
                : "text-yellow-600 font-bold"
            }
          >
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MyTasks;