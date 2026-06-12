import { Link } from "react-router-dom";

const Navbar = () => {
  const role = localStorage.getItem("role");

  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/tasks">My Tasks</Link>

      {role === "admin" && (
        <>
          <Link to="/admin/analytics">Analytics</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/tasks">All Tasks</Link>
          <Link to="/admin/logs">Logs</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;