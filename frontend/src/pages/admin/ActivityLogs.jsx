import { useEffect, useState } from "react";
import API from "../../api/axios";

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const res = await API.get("/admin/logs");
      setLogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Activity Logs
      </h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Action</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log._id}
                className="border-b"
              >
                <td className="p-3">
                  {log.user?.username}
                </td>

                <td className="p-3">
                  {log.action}
                </td>

                <td className="p-3">
                  {new Date(
                    log.createdAt
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLogs;