const express = require("express");
const {
  gellAllStudents,
  createStudents,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentCont");

const router = express.Router();

router.get("/students", gellAllStudents);
router.post("/student", createStudents);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

module.exports = router;
