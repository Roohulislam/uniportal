import React, { useState } from "react";
import { FaSave, FaFileUpload } from "react-icons/fa";

const CreateExam = () => {
  const [examTitle, setExamTitle] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examType, setExamType] = useState("Mid-Term"); // Default to Mid-Term
  const [examFile, setExamFile] = useState(null);
  const [message, setMessage] = useState("");

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setExamFile(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!examTitle || !examDate || !examFile) {
      setMessage("Please fill in all fields and upload the exam file.");
      return;
    }

    // Simulating the process of creating an exam (this can be modified to integrate with backend)
    const examData = {
      examTitle,
      examDate,
      examType,
      examFile: examFile.name,
    };

    console.log("Exam Created:", examData);
    setMessage("Exam created successfully!");

    // Clear the form after submission
    setExamTitle("");
    setExamDate("");
    setExamType("Mid-Term");
    setExamFile(null);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Create Exam</h2>

      {/* Exam Title and Date */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="examTitle" className="block text-sm font-semibold">
            Exam Title
          </label>
          <input
            type="text"
            id="examTitle"
            placeholder="Enter Exam Title"
            value={examTitle}
            onChange={(e) => setExamTitle(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="examDate" className="block text-sm font-semibold">
            Exam Date
          </label>
          <input
            type="date"
            id="examDate"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Dropdown for Exam Type */}
        <div>
          <label htmlFor="examType" className="block text-sm font-semibold">
            Exam Type
          </label>
          <select
            id="examType"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Mid-Term">Mid-Term</option>
            <option value="Final-Term">Final-Term</option>
            <option value="Assignment">Assignment</option>
            <option value="Lab">Lab</option>
            <option value="Quiz">Quiz</option>
          </select>
        </div>

        <div>
          <label htmlFor="examFile" className="block text-sm font-semibold">
            Upload Exam Questions (PDF)
          </label>
          <input
            type="file"
            id="examFile"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message Display */}
        {message && (
          <div className="text-sm text-green-400 mt-4">{message}</div>
        )}

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md"
          >
            <FaSave className="inline-block mr-2" />
            Create Exam
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExam;
