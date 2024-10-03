const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controller/Controller");

const upload = require("../config/multer");

const router = express.Router();

// Create employee with image upload
router.post("/create", upload.single("Image"), createEmployee);

// Read all employees
router.get("/getAll", getAllEmployees);

// Get employee by ID
router.get("/getById/:id", getEmployeeById);

// Update employee with image upload
router.put("/update/:id", upload.single('Image'), updateEmployee);

// Delete employee
router.delete("/delete/:id", deleteEmployee);

module.exports = router;
