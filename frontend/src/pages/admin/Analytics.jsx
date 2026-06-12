import { useEffect, useState } from "react";
import API from "../../api/axios";

const Analytics = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const u = await API.get("/admin/users");
      const t = await API.get("/admin/tasks");

      setUsers(u.data);
      setTasks(t.data);
    };

    fetchData();
  }, []);

  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.filter((t) => t.status === "pending").length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded shadow">
          Users
          <div className="text-3xl">{users.length}</div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          Tasks
          <div className="text-3xl">{tasks.length}</div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          Completed
          <div className="text-3xl">{completed}</div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          Pending
          <div className="text-3xl">{pending}</div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;