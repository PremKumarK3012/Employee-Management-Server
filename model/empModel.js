const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    EmployeeName: { type: String, trim: true },
    EmployeeID: { type: Number, trim: true },
    Department: { type: String, trim: true },
    Designation: { type: String, trim: true },
    Project: { type: String, trim: true },
    Type: { type: String, trim: true },
    Status: { type: String, trim: true },
    Image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
