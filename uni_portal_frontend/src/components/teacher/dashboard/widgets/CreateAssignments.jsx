import React, { useState } from "react";
import { FaSave, FaPlusCircle } from "react-icons/fa";

const CreateAssignments = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [file, setFile] = useState(null); // For file state
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState("");

  // Handle title change
  const handleTitleChange = (e) => setTitle(e.target.value);

  // Handle description change
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  // Handle due date change
  const handleDueDateChange = (e) => setDueDate(e.target.value);

  // Handle file selection
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // Handle form submission
  const handleSubmit = () => {
    if (!title || !description || !dueDate || !file) {
      setError("All fields including file upload are required!");
      return;
    }

    const newAssignment = {
      title,
      description,
      dueDate,
      file: file.name, // Store the file name
      id: Date.now(),
    };

    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
    setTitle("");
    setDescription("");
    setDueDate("");
    setFile(null); // Reset file after submission
    setError(""); // Reset error on successful form submission
    alert("Assignment Created Successfully!");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Create Assignment</h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-600 text-white p-2 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {/* Assignment Form */}
      <div className="space-y-4 mb-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-semibold">
            Assignment Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter assignment title"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-semibold">
            Assignment Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter assignment description"
            rows="4"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Due Date Input */}
        <div>
          <label htmlFor="dueDate" className="block text-sm font-semibold">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={handleDueDateChange}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="file" className="block text-sm font-semibold">
            Upload Assignment File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {file && (
            <p className="mt-2 text-sm text-gray-400">
              File Selected: {file.name}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md flex items-center"
        >
          <FaPlusCircle className="inline-block mr-2" />
          Create Assignment
        </button>
      </div>

      {/* Created Assignments List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Created Assignments</h3>
        <ul className="space-y-4">
          {assignments.map((assignment) => (
            <li
              key={assignment.id}
              className="p-4 bg-gray-700 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{assignment.title}</p>
                <p className="text-sm text-gray-400">
                  {assignment.description}
                </p>
                <p className="text-xs text-gray-300">
                  Due Date: {assignment.dueDate}
                </p>
                <p className="text-xs text-gray-300">File: {assignment.file}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateAssignments;
