import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      alert("Registration Successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div style={{ width: 400, margin: "80px auto" }}>
      <h2>Register</h2>

      <form onSubmit={register}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <br /><br />

        <button>Register</button>
      </form>

      <br />

      <Link to="/">Already have an account?</Link>
    </div>
  );
}

export default Register;