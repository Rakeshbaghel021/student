const mongoose = require("mongoose");

const student = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: true,
    },
    rollNo: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", student);
