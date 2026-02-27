const express = require("express");
const Complaint = require("../models/Complaint");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// 📝 Submit Complaint (Student)
router.post("/", protect, async (req, res) => {
  try {
    const { category, description, priority } = req.body;

    const complaint = await Complaint.create({
      student: req.user.id,
      category,
      description,
      priority,
    });

    res.status(201).json({
      message: "Complaint submitted successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📝 View Own Complaints (Student)
router.get("/mine", protect, async (req, res) => {
  try {
    const complaints = await Complaint.find({ student: req.user.id });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📝 Admin: View All Complaints
router.get("/", protect, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const complaints = await Complaint.find().populate("student", "name email");
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📝 Admin: Update Complaint Status
router.put("/:id/status", protect, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const { status } = req.body; // Expected: Pending / In Progress / Resolved
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    complaint.status = status;
    await complaint.save();

    res.status(200).json({
      message: `Complaint status updated to ${status}`,
      complaint,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;