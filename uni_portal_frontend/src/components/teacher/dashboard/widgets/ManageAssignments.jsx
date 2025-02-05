import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaSearch } from "react-icons/fa";

const ManageAssignments = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Assignment 1",
      description: "Description of Assignment 1",
      dueDate: "2024-12-30",
      file: "file1.pdf",
    },
    {
      id: 2,
      title: "Assignment 2",
      description: "Description of Assignment 2",
      dueDate: "2024-12-15",
      file: "file2.pdf",
    },
    {
      id: 3,
      title: "Assignment 3",
      description: "Description of Assignment 3",
      dueDate: "2024-11-20",
      file: "file3.pdf",
    },
  ]);
  const [search, setSearch] = useState("");
  const [editAssignment, setEditAssignment] = useState(null);

  // Filter assignments based on search term
  const filteredAssignments = assignments.filter((assignment) =>
    assignment.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle assignment delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this assignment?"
    );
    if (confirmDelete) {
      setAssignments(assignments.filter((assignment) => assignment.id !== id));
    }
  };

  // Handle edit assignment (open edit mode)
  const handleEdit = (assignment) => {
    setEditAssignment(assignment);
  };

  // Handle save edited assignment
  const handleSaveEdit = (updatedAssignment) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === updatedAssignment.id ? updatedAssignment : assignment
      )
    );
    setEditAssignment(null);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Manage Assignments</h2>

      {/* Search Input */}
      <div className="flex items-center gap-2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Assignments"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Assignments List */}
      <ul className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <li
            key={assignment.id}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
          >
            {editAssignment && editAssignment.id === assignment.id ? (
              // Edit Mode
              <div className="w-full space-y-2">
                <input
                  type="text"
                  value={editAssignment.title}
                  onChange={(e) =>
                    setEditAssignment({
                      ...editAssignment,
                      title: e.target.value,
                    })
                  }
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  value={editAssignment.description}
                  onChange={(e) =>
                    setEditAssignment({
                      ...editAssignment,
                      description: e.target.value,
                    })
                  }
                  rows="2"
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="date"
                  value={editAssignment.dueDate}
                  onChange={(e) =>
                    setEditAssignment({
                      ...editAssignment,
                      dueDate: e.target.value,
                    })
                  }
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={() => handleSaveEdit(editAssignment)}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow-md mt-2"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              // Display Mode
              <div className="w-full flex justify-between items-center">
                <div>
                  <p className="font-semibold">{assignment.title}</p>
                  <p className="text-sm text-gray-400">
                    {assignment.description}
                  </p>
                  <p className="text-xs text-gray-300">
                    Due Date: {assignment.dueDate}
                  </p>
                  <p className="text-xs text-gray-300">
                    File: {assignment.file}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(assignment)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(assignment.id)}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-md"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAssignments;
