import React, { useState, useEffect } from "react";
import { FaSave, FaSearch } from "react-icons/fa";

const GradeAssignments = () => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [gradeType, setGradeType] = useState({});
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [search, setSearch] = useState("");

  // Mock data for students
  const mockStudents = [
    { studentId: "S12345", name: "John Doe", course: "Course 1" },
    { studentId: "S12346", name: "Jane Smith", course: "Course 2" },
    { studentId: "S12347", name: "Emily Johnson", course: "Course 1" },
    { studentId: "S12348", name: "Michael Brown", course: "Course 3" },
    { studentId: "S12349", name: "Sarah Lee", course: "Course 2" },
  ];

  useEffect(() => {
    // Filter students based on selected course
    if (selectedCourse) {
      const filtered = mockStudents.filter(
        (student) => student.course === selectedCourse
      );
      setStudents(filtered);
    } else {
      setStudents(mockStudents);
    }
  }, [selectedCourse]);

  // Handle grade change
  const handleGradeChange = (studentId, grade) => {
    setGrades((prev) => ({
      ...prev,
      [studentId]: grade,
    }));
  };

  // Toggle grade type between positive and negative
  const toggleGradeType = (studentId) => {
    setGradeType((prev) => ({
      ...prev,
      [studentId]: prev[studentId] === "negative" ? "positive" : "negative",
    }));
  };

  // Save grades
  const handleSaveGrades = () => {
    if (!selectedCourse || !selectedAssignment) {
      alert("Please select a course and assignment!");
      return;
    }

    const gradeData = students.map((student) => ({
      studentId: student.studentId,
      grade: grades[student.studentId] || "N/A",
      type: gradeType[student.studentId] || "positive",
    }));

    console.log("Grades Submitted:", {
      course: selectedCourse,
      assignment: selectedAssignment,
      grades: gradeData,
    });

    alert("Grades saved successfully!");
  };

  // Filter students based on search input
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Grade Assignments</h2>

      {/* Course and Assignment Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="course" className="block text-sm font-semibold">
            Select Course
          </label>
          <select
            id="course"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="Course 1">Course 1</option>
            <option value="Course 2">Course 2</option>
            <option value="Course 3">Course 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="assignment" className="block text-sm font-semibold">
            Select Assignment
          </label>
          <select
            id="assignment"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedAssignment}
            onChange={(e) => setSelectedAssignment(e.target.value)}
          >
            <option value="">Select Assignment</option>
            <option value="Assignment 1">Assignment 1</option>
            <option value="Assignment 2">Assignment 2</option>
            <option value="Assignment 3">Assignment 3</option>
          </select>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 items-center">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Student"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
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
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Grade"
                value={grades[student.studentId] || ""}
                onChange={(e) =>
                  handleGradeChange(student.studentId, e.target.value)
                }
                className="w-20 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
              />
              <button
                onClick={() => toggleGradeType(student.studentId)}
                className={`py-2 px-4 rounded text-sm ${
                  gradeType[student.studentId] === "negative"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                } text-white`}
              >
                {gradeType[student.studentId] === "negative"
                  ? "Negative Grade"
                  : "Positive Grade"}
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

export default GradeAssignments;
