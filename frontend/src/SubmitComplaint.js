import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "./config";

function SubmitComplaint({ token }) {
  const [form, setForm] = useState({
    category: "",
    description: "",
    priority: "Medium",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/complaints`, form, {
        headers: { Authorization: `Bearer ${token}` }, "Content-Type": "application/json"
      });
      alert(res.data.message); // will show "Complaint submitted successfully"
    } catch (err) {
      console.error(err.response || err);
      alert("Error submitting complaint");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h2>Submit Complaint</h2>
      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="form-control mb-2"
        required
      ></textarea>
      <select
        name="priority"
        onChange={handleChange}
        className="form-control mb-2"
        defaultValue="Medium"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default SubmitComplaint;