import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

function StudentDashboard({ token }) {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/complaints/mine`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComplaints(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchComplaints();
  }, [token]);

  return (
    <div className="container mt-5">
      <h2>My Complaints</h2>
      <ul className="list-group">
        {complaints.map((c) => (
          <li key={c._id} className="list-group-item">
            <strong>{c.category}</strong>: {c.description} <br />
            Status: {c.status} | Priority: {c.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;