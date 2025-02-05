import React, { useState, useEffect } from "react";
import { FaSave, FaSearch } from "react-icons/fa";

const GradeQuizzes = () => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [gradeType, setGradeType] = useState({});
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [search, setSearch] = useState("");

  // Mock data for students
  const mockStudents = [
    { studentId: "S1001", name: "John Doe", course: "Math" },
    { studentId: "S1002", name: "Jane Smith", course: "Science" },
    { studentId: "S1003", name: "Emily Johnson", course: "Math" },
    { studentId: "S1004", name: "Michael Brown", course: "History" },
    { studentId: "S1005", name: "Sarah Lee", course: "Science" },
  ];

  useEffect(() => {
    // Filter students by course
    if (selectedCourse) {
      const filteredStudents = mockStudents.filter(
        (student) => student.course === selectedCourse
      );
      setStudents(filteredStudents);
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
      [studentId]: prev[studentId] === "positive" ? "negative" : "positive",
    }));
  };

  // Save grades
  const handleSaveGrades = () => {
    if (!selectedCourse || !selectedQuiz) {
      alert("Please select a course and quiz!");
      return;
    }

    const gradeData = students.map((student) => ({
      studentId: student.studentId,
      grade: grades[student.studentId] || "N/A",
      type: gradeType[student.studentId] || "positive",
    }));

    console.log("Grades Submitted:", {
      course: selectedCourse,
      quiz: selectedQuiz,
      grades: gradeData,
    });

    alert("Quiz grades saved successfully!");
  };

  // Filter students based on search input
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-green-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Grade Quizzes</h2>

      {/* Course and Quiz Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="course" className="block text-sm font-semibold">
            Select Course
          </label>
          <select
            id="course"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
        </div>
        <div>
          <label htmlFor="quiz" className="block text-sm font-semibold">
            Select Quiz
          </label>
          <select
            id="quiz"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedQuiz}
            onChange={(e) => setSelectedQuiz(e.target.value)}
          >
            <option value="">Select Quiz</option>
            <option value="Quiz 1">Quiz 1</option>
            <option value="Quiz 2">Quiz 2</option>
            <option value="Quiz 3">Quiz 3</option>
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
            className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Student List */}
      <ul className="space-y-4">
        {filteredStudents.map((student) => (
          <li
            key={student.studentId}
            className="flex flex-col gap-2 p-4 bg-gray-700 rounded-lg shadow"
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
                className="w-20 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
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
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow-md"
        >
          <FaSave className="inline-block mr-2" />
          Save Grades
        </button>
      </div>
    </div>
  );
};

export default GradeQuizzes;
