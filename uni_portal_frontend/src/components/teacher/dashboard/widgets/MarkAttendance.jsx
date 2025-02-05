import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaSave,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import axios from "axios";

const MarkAttendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");

  // Sample students data
  const sampleStudents = [
    { _id: "1", name: "John Doe", studentId: "S12345" },
    { _id: "2", name: "Jane Smith", studentId: "S12346" },
    { _id: "3", name: "Alice Johnson", studentId: "S12347" },
    { _id: "4", name: "Bob Brown", studentId: "S12348" },
  ];

  // Fetch students and courses when the component mounts
  useEffect(() => {
    // In a real scenario, fetch students based on course
    // axios.get("http://localhost:5000/students").then((res) => {
    //   setStudents(res.data);
    // });

    // For now, use the sample data
    setStudents(sampleStudents);
  }, [course]);

  // Handle student attendance status change
  const handleAttendanceChange = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  // Handle save attendance
  const handleSaveAttendance = async () => {
    if (!selectedDate || !course) {
      alert("Please select a date and course!");
      return;
    }
    const attendanceData = Object.keys(attendance).map((studentId) => ({
      studentId,
      status: attendance[studentId],
    }));
    try {
      await axios.post("http://localhost:5000/attendance", {
        course,
        date: selectedDate,
        attendance: attendanceData,
      });
      alert("Attendance saved successfully!");
    } catch (error) {
      console.error("Error saving attendance:", error);
      alert("There was an error saving attendance.");
    }
  };

  // Handle bulk attendance actions (e.g., marking all as present or absent)
  const handleBulkAttendance = (status) => {
    const updatedAttendance = {};
    students.forEach((student) => {
      updatedAttendance[student._id] = status;
    });
    setAttendance(updatedAttendance);
  };

  // Filter students based on search
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Mark Attendance</h2>

      {/* Course and Date Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="course" className="block text-sm font-semibold">
            Select Course
          </label>
          <select
            id="course"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            <option value="Course1">Course 1</option>
            <option value="Course2">Course 2</option>
            <option value="Course3">Course 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-semibold">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      {/* Search and Bulk Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => handleBulkAttendance("present")}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow-md"
          >
            Mark All Present
          </button>
          <button
            onClick={() => handleBulkAttendance("absent")}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-md"
          >
            Mark All Absent
          </button>
        </div>
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
            key={student._id}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
          >
            <div>
              <p className="font-semibold">{student.name}</p>
              <p className="text-sm text-gray-400">{student.studentId}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleAttendanceChange(student._id, "present")}
                className={`${
                  attendance[student._id] === "present"
                    ? "text-green-400"
                    : "text-gray-400"
                } hover:text-green-500 transition`}
              >
                <FaCheckCircle />
              </button>
              <button
                onClick={() => handleAttendanceChange(student._id, "absent")}
                className={`${
                  attendance[student._id] === "absent"
                    ? "text-red-400"
                    : "text-gray-400"
                } hover:text-red-500 transition`}
              >
                <FaTimesCircle />
              </button>
              <button
                onClick={() => handleAttendanceChange(student._id, "late")}
                className={`${
                  attendance[student._id] === "late"
                    ? "text-yellow-400"
                    : "text-gray-400"
                } hover:text-yellow-500 transition`}
              >
                <FaBell />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSaveAttendance}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md"
        >
          <FaSave className="inline-block mr-2" />
          Save Attendance
        </button>
      </div>
    </div>
  );
};

export default MarkAttendance;
