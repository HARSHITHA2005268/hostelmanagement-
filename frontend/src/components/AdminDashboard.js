import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

function AdminDashboard({ token }) {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/complaints`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleResolve = async (id) => {
    try {
      await axios.put(
        `${BASE_URL}/complaints/${id}/status`,
        { status: "Resolved" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchComplaints(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Error updating status");
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, [token]);

  return (
    <div className="container mt-5">
      <h2>All Complaints (Admin)</h2>
      <ul className="list-group">
  {complaints.map((c) => (
    <li key={c._id} className="list-group-item">
      <strong>{c.category}</strong> by {c.student} <br />
      {c.description} <br />
      Status: {c.status} | Priority: {c.priority} <br />
      {c.status !== "Resolved" && (
        <button
          className="btn btn-success mt-1"
          onClick={() => handleResolve(c._id)}
        >
          Mark as Resolved
        </button>
      )}
    </li>
  ))}
</ul>
    </div>
  );
}

export default AdminDashboard;