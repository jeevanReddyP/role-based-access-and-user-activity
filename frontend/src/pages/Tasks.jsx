import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
if(!title||!description) return alert("Please fill all the feilds!")
    try {
      await API.post("/tasks", {
        title,
        description,
      });

      alert("Task Created!");
      setTitle("");
      setDescription("");
       navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create Task</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 w-full"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
        />

        <button className="bg-green-500 text-white px-4 py-2">
          Create
        </button>
        
      </form>
    </div>
  );
};

export default CreateTask;