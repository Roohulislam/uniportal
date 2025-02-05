import React, { useState } from "react";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const ManageExams = () => {
  // State for Exams, Labs, and Assignments
  const [exams, setExams] = useState([
    { id: 1, title: "Mid-Term Exam", type: "Mid-Term", date: "2024-01-15" },
    { id: 2, title: "Final-Term Exam", type: "Final-Term", date: "2024-06-20" },
    { id: 3, title: "Quiz 1", type: "Quiz", date: "2024-02-05" },
    { id: 4, title: "Quiz 2", type: "Quiz", date: "2024-03-10" },
  ]);

  const [labs, setLabs] = useState([
    { id: 1, title: "Physics Lab", date: "2024-01-12" },
    { id: 2, title: "Chemistry Lab", date: "2024-01-18" },
    { id: 3, title: "Biology Lab", date: "2024-01-25" },
  ]);

  const [assignments, setAssignments] = useState([
    { id: 1, title: "Assignment 1", date: "2024-01-20" },
    { id: 2, title: "Assignment 2", date: "2024-02-15" },
  ]);

  // State for search and editing
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  // Generic function to handle deletion
  const handleDelete = (id, type) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    if (type === "Exam") {
      setExams(exams.filter((item) => item.id !== id));
    } else if (type === "Lab") {
      setLabs(labs.filter((item) => item.id !== id));
    } else if (type === "Assignment") {
      setAssignments(assignments.filter((item) => item.id !== id));
    }
  };

  // Handle edit
  const handleEdit = (item, type) => {
    setEditItem({ ...item, type });
    setUpdatedTitle(item.title);
    setUpdatedDate(item.date);
  };

  // Save edited item
  const saveEdit = () => {
    if (editItem.type === "Exam") {
      setExams(
        exams.map((item) =>
          item.id === editItem.id
            ? { ...item, title: updatedTitle, date: updatedDate }
            : item
        )
      );
    } else if (editItem.type === "Lab") {
      setLabs(
        labs.map((item) =>
          item.id === editItem.id
            ? { ...item, title: updatedTitle, date: updatedDate }
            : item
        )
      );
    } else if (editItem.type === "Assignment") {
      setAssignments(
        assignments.map((item) =>
          item.id === editItem.id
            ? { ...item, title: updatedTitle, date: updatedDate }
            : item
        )
      );
    }
    setEditItem(null);
  };

  // Filter based on search input
  const filterItems = (items) =>
    items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

  const filteredExams = filterItems(exams);
  const filteredLabs = filterItems(labs);
  const filteredAssignments = filterItems(assignments);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">
        Manage Exams, Labs, and Assignments
      </h2>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Display Exams */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Exams</h3>
        <ul className="space-y-4">
          {filteredExams.map((exam) => (
            <li
              key={exam.id}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
            >
              {editItem &&
              editItem.id === exam.id &&
              editItem.type === "Exam" ? (
                <div className="flex gap-4 w-full">
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="date"
                    value={updatedDate}
                    onChange={(e) => setUpdatedDate(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-md"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-semibold">{exam.title}</p>
                    <p className="text-sm text-gray-400">{exam.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(exam, "Exam")}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(exam.id, "Exam")}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow-md"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {filteredExams.length === 0 && (
          <p className="text-gray-400 text-center mt-4">No exams found.</p>
        )}
      </section>

      {/* Display Labs */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Labs</h3>
        <ul className="space-y-4">
          {filteredLabs.map((lab) => (
            <li
              key={lab.id}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
            >
              {editItem && editItem.id === lab.id && editItem.type === "Lab" ? (
                <div className="flex gap-4 w-full">
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="date"
                    value={updatedDate}
                    onChange={(e) => setUpdatedDate(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-md"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-semibold">{lab.title}</p>
                    <p className="text-sm text-gray-400">{lab.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(lab, "Lab")}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(lab.id, "Lab")}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow-md"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {filteredLabs.length === 0 && (
          <p className="text-gray-400 text-center mt-4">No labs found.</p>
        )}
      </section>

      {/* Display Assignments */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Assignments</h3>
        <ul className="space-y-4">
          {filteredAssignments.map((assignment) => (
            <li
              key={assignment.id}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
            >
              {editItem &&
              editItem.id === assignment.id &&
              editItem.type === "Assignment" ? (
                <div className="flex gap-4 w-full">
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="date"
                    value={updatedDate}
                    onChange={(e) => setUpdatedDate(e.target.value)}
                    className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-md"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-semibold">{assignment.title}</p>
                    <p className="text-sm text-gray-400">{assignment.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(assignment, "Assignment")}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(assignment.id, "Assignment")}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow-md"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {filteredAssignments.length === 0 && (
          <p className="text-gray-400 text-center mt-4">
            No assignments found.
          </p>
        )}
      </section>
    </div>
  );
};

export default ManageExams;
