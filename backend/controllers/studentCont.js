const Student = require("../models/Student");

const gellAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createStudents = async (req, res) => {
  try {
    const { name, standard, rollNo } = req.body;
    const student = new Student({
      name,
      standard,
      rollNo,
    });
    await student.save();
    const students = await Student.find();
    res.json({ student, students, msg: "created a student" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { name, standard, rollNo } = req.body;
    await Student.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name,
        standard,
        rollNo,
      }
    );
    const students = await Student.find();
    res.json({ msg: "updated a student", students });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    const students = await Student.find();

    res.json({ students, msg: "Deleted a student" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  gellAllStudents,
  createStudents,
  deleteStudent,
  updateStudent,
};
