require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ IMPORT ROUTES
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes"); // Make sure file name is exact

const protect = require("./middleware/authMiddleware");

const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", authRoutes);      // Authentication routes
app.use("/api/students", studentRoutes); // Student routes
app.use("/api/complaints", complaintRoutes); // Complaint routes

// ✅ ROOT ROUTE
app.get("/", (req, res) => {
  res.send("HostelOps Backend Running");
});

// ✅ PROTECTED TEST ROUTE (JWT Test)
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user,
  });
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});