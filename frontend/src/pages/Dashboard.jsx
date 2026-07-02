import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getTasks = async () => {
    try {
      const res = await api.get("/tasks", { headers });
      setTasks(res.data.tasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);
  const editTask = (task) => {
  setEditingId(task._id);

  setForm({
    title: task.title,
    description: task.description,
    priority: task.priority,
  });
};

const createTask = async () => {
  try {

    if (editingId) {

      await api.put(
        `/tasks/${editingId}`,
        form,
        { headers }
      );

      setEditingId(null);

    } else {

      await api.post(
        "/tasks",
        form,
        { headers }
      );

    }

    setForm({
      title: "",
      description: "",
      priority: "medium",
    });

    getTasks();

  } catch (err) {
    alert(err.response?.data?.message);
  }
};
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`, { headers });
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
<div className="container">
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "25px",
  }}
>
  <div>
    <h1>📋 Task Manager Dashboard</h1>
    <p style={{ color: "#666" }}>
      Manage your daily tasks efficiently.
    </p>
  </div>

  <button className="logout" onClick={logout}>
    Logout
  </button>
</div>

      <hr />

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <br /><br />

      <select
        value={form.priority}
        onChange={(e) =>
          setForm({
            ...form,
            priority: e.target.value,
          })
        }
      >
        <option>low</option>
        <option>medium</option>
        <option>high</option>
      </select>

      <br /><br />

      <button onClick={createTask}>
  {editingId ? "Update Task" : "Create Task"}
</button>

      <hr />

      {tasks.map((task) => (
       <div className="card">
          <h3>{task.title}</h3>

          <p>{task.description}</p>

<p>
Status :
<span
style={{
background:"#facc15",
padding:"4px 10px",
borderRadius:"20px",
marginLeft:"8px"
}}
>
{task.status}
</span>
</p>
<p>
  Priority :
  <span
    style={{
      background: "#3b82f6",
      color: "white",
      padding: "4px 10px",
      borderRadius: "20px",
      marginLeft: "8px",
      fontSize: "14px",
    }}
  >
    {task.priority}
  </span>
</p>
         <button onClick={() => editTask(task)}>
  Edit
</button>

{" "}

<button onClick={() => deleteTask(task._id)}>
  Delete
</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;