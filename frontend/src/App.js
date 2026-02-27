import React, { useState } from "react";
import Login from "./components/Login";               
import SubmitComplaint from "./SubmitComplaint";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState("");

  if (!token) {
    return <Login setToken={setToken} setRole={setRole} />;
  }

  return (
    <div>
      <h1>Welcome to HostelOps</h1>
      {role === "student" && (
        <>
          <SubmitComplaint token={token} />
          <StudentDashboard token={token} />
        </>
      )}
      {role === "admin" && <AdminDashboard token={token} />}
    </div>
  );
}

export default App;