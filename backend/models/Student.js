const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roomNumber: {
    type: Number,
    required: true
  },
  hostelBlock: {
    type: String,
    required: true
  },
  phone: String
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);