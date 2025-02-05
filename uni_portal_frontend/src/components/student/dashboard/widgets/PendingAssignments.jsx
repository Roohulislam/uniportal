import React from "react";

const PendingAssignments = () => {
  const pendingAssignments = [
    {
      id: 1,
      courseTitle: "Mobile Application Development",
      assignmentTitle: "Develop Quiz Application",
      deadline: "Dec 27, 2024 23:59",
      downloadLink: "Download Files",
      submitLink: "Upload File",
      description: "Create a quiz application with multiple choice questions."
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center">
        Course Portal Pending Assignments
      </h2>
      <table className="w-full border-collapse border border-gray-700 text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2 border border-gray-600">#</th>
            <th className="px-4 py-2 border border-gray-600">Course Title</th>
            <th className="px-4 py-2 border border-gray-600">Assignment Title</th>
            <th className="px-4 py-2 border border-gray-600">Deadline</th>
            <th className="px-4 py-2 border border-gray-600">Description</th>
            <th className="px-4 py-2 border border-gray-600">Download</th>
            <th className="px-4 py-2 border border-gray-600">Submit Now</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {pendingAssignments.map((assignment, index) => (
            <tr
              key={assignment.id}
              className="hover:bg-purple-800 transition-colors duration-200"
            >
              <td className="px-4 py-2">{assignment.id}</td>
              <td className="px-4 py-2">{assignment.courseTitle}</td>
              <td className="px-4 py-2">{assignment.assignmentTitle}</td>
              <td className="px-4 py-2">{assignment.deadline}</td>
              <td className="px-4 py-2">{assignment.description}</td>
              <td className="px-4 py-2 text-blue-500">
                <button className="hover:text-blue-300 transition-colors duration-200">
                  {assignment.downloadLink}
                </button>
              </td>
              <td className="px-4 py-2 text-blue-500">
                <button className="hover:text-blue-300 transition-colors duration-200">
                  {assignment.submitLink}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingAssignments;
