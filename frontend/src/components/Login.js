import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

function Login({ setToken, setRole }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, form); // make sure /auth/login exists in backend
      setToken(res.data.token);
      setRole(res.data.role); // "student" or "admin"
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default Login;