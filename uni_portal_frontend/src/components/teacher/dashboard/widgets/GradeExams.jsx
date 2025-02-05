import React, { useState, useEffect } from "react";
import { FaSave, FaSearch } from "react-icons/fa";

const GradeExams = () => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [selectedExam, setSelectedExam] = useState("");
  const [search, setSearch] = useState("");
  const [courseSearch, setCourseSearch] = useState(""); // For course search
  const [studentGrades, setStudentGrades] = useState({}); // For individual grade states

  // Mock data for students
  const mockStudents = [
    { studentId: "S12345", name: "John Doe", course: "Course 1" },
    { studentId: "S12346", name: "Jane Smith", course: "Course 2" },
    { studentId: "S12347", name: "Emily Johnson", course: "Course 1" },
    { studentId: "S12348", name: "Michael Brown", course: "Course 3" },
    { studentId: "S12349", name: "Sarah Lee", course: "Course 2" },
  ];

  useEffect(() => {
    // Load students data
    setStudents(mockStudents);
  }, []);

  // Handle grade change
  const handleGradeChange = (studentId, grade) => {
    setGrades((prev) => ({
      ...prev,
      [studentId]: grade,
    }));
  };

  // Handle grade toggle for individual student
  const handleGradeToggle = (studentId) => {
    setStudentGrades((prev) => ({
      ...prev,
      [studentId]: prev[studentId] === "positive" ? "negative" : "positive", // Toggle between positive and negative
    }));
  };

  // Save grades
  const handleSaveGrades = () => {
    if (!selectedExam) {
      alert("Please select an exam type (Mid-Term or Final-Term)!");
      return;
    }

    const gradeData = Object.keys(grades).map((studentId) => ({
      studentId,
      grade: grades[studentId],
      exam: selectedExam,
    }));

    console.log("Exam Grades Submitted:", {
      exam: selectedExam,
      grades: gradeData,
    });

    alert("Grades saved successfully!");
  };

  // Filter students based on name, course, and search input
  const filteredStudents = students.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCourse = student.course
      .toLowerCase()
      .includes(courseSearch.toLowerCase());
    return matchesName && matchesCourse;
  });

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Grade Exams</h2>

      {/* Exam and Course Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="exam" className="block text-sm font-semibold">
            Select Exam Type
          </label>
          <select
            id="exam"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
          >
            <option value="">Select Exam</option>
            <option value="Mid-Term">Mid-Term</option>
            <option value="Final-Term">Final-Term</option>
          </select>
        </div>
      </div>

      {/* Search by Student Name */}
      <div className="flex gap-2 items-center mb-6 w-full md:w-1/2">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Student"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Search by Course */}
      <div className="flex gap-2 items-center mb-6 w-full md:w-1/2">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by Course"
          value={courseSearch}
          onChange={(e) => setCourseSearch(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Student List */}
      <ul className="space-y-4">
        {filteredStudents.map((student) => (
          <li
            key={student.studentId}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
          >
            <div>
              <p className="font-semibold">{student.name}</p>
              <p className="text-sm text-gray-400">{student.course}</p>
              <p className="text-sm text-gray-400">{student.studentId}</p>
            </div>
            <div className="flex gap-4 items-center w-full md:w-auto justify-end">
              <input
                type="text"
                placeholder="Grade"
                value={grades[student.studentId] || ""}
                onChange={(e) =>
                  handleGradeChange(student.studentId, e.target.value)
                }
                className="w-20 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              />

              {/* Grade Toggle Button */}
              <button
                onClick={() => handleGradeToggle(student.studentId)}
                className={`${
                  studentGrades[student.studentId] === "positive"
                    ? "bg-green-500"
                    : "bg-red-500"
                } text-white py-2 px-4 rounded-lg shadow-md`}
              >
                {studentGrades[student.studentId] === "positive"
                  ? "Positive"
                  : "Negative"}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSaveGrades}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md"
        >
          <FaSave className="inline-block mr-2" />
          Save Grades
        </button>
      </div>
    </div>
  );
};

export default GradeExams;
