import { useEffect, useState } from "react";
import API from "../../api/axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/admin/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (id) => {
    try {
      await API.put(`/admin/users/${id}/status`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          User Management
        </h1>

        <div className="bg-white rounded-lg shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-200">

              <tr>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>

            </thead>

            <tbody>

              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b"
                >
                  <td className="p-3">
                    {user.username}
                  </td>

                  <td className="p-3">
                    {user.email}
                  </td>

                  <td className="p-3 capitalize">
                    {user.role}
                  </td>

                  <td className="p-3 capitalize">
                    {user.status}
                  </td>

                  <td className="p-3 flex gap-2">

                    <button
                      onClick={() =>
                        handleStatusChange(user._id)
                      }
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Toggle Status
                    </button>

                    <button
                      onClick={() =>
                        handleDeleteUser(user._id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default UserManagement;