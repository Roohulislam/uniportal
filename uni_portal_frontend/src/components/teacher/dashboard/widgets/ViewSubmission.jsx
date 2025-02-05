import React, { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";

const ViewSubmission = () => {
  const [submissions, setSubmissions] = useState([
    {
      studentId: "S12345",
      studentName: "John Doe",
      assignmentTitle: "Assignment 1",
      submissionDate: "2024-12-25",
      file: "assignment1_john.pdf",
      grade: "A",
    },
    {
      studentId: "S12346",
      studentName: "Jane Smith",
      assignmentTitle: "Assignment 1",
      submissionDate: "2024-12-24",
      file: "assignment1_jane.pdf",
      grade: "B",
    },
    {
      studentId: "S12347",
      studentName: "Emily Johnson",
      assignmentTitle: "Assignment 2",
      submissionDate: "2024-12-22",
      file: "assignment2_emily.pdf",
      grade: "A+",
    },
  ]);
  const [search, setSearch] = useState("");

  // Filter submissions based on search input
  const filteredSubmissions = submissions.filter((submission) =>
    submission.studentName.toLowerCase().includes(search.toLowerCase())
  );

  // Handle file download
  const handleDownload = (file) => {
    // Assuming the file is available locally in the public folder or an accessible URL
    const fileUrl = `/files/${file}`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = file;
    link.click();
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">View Submissions</h2>

      {/* Search Input */}
      <div className="flex items-center gap-2 mb-6">
        <FaEye className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by Student Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Submissions List */}
      <ul className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <li
            key={submission.studentId}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
          >
            <div>
              <p className="font-semibold">{submission.studentName}</p>
              <p className="text-sm text-gray-400">
                Student ID: {submission.studentId}
              </p>
              <p className="text-sm text-gray-300">
                Assignment: {submission.assignmentTitle}
              </p>
              <p className="text-xs text-gray-300">
                Submitted on: {submission.submissionDate}
              </p>
              <p className="text-xs text-gray-300">Grade: {submission.grade}</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Download Button */}
              <button
                onClick={() => handleDownload(submission.file)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
              >
                <FaDownload className="inline-block mr-2" />
                Download
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSubmission;
