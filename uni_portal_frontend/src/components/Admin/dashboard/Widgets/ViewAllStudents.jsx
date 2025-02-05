import React, { useState, useEffect } from "react";

const ViewAllStudents = () => {
  const [students, setStudents] = useState([]); // Stores student data
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [itemsPerPage] = useState(10); // Items per page

  // Simulate fetching data from API
  useEffect(() => {
    const fetchStudents = async () => {
      const data = [
        { id: 1, name: "John Doe", rollNo: "202301", program: "BSc CS", year: "1" },
        { id: 2, name: "Jane Smith", rollNo: "202302", program: "BSc Maths", year: "2" },
        // Add more student data...
      ];
      setStudents(data);
    };
    fetchStudents();
  }, []);

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.program.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination details
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6  bg-gray-300 rounded-lg min-h-screen ">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">View All Students</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, roll no, or program"
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full sm:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Roll No</th>
              <th className="px-4 py-2 text-left">Program</th>
              <th className="px-4 py-2 text-left">Year</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((student, index) => (
                <tr
                  key={student.id}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
                >
                  <td className="px-4 py-2">{index + 1 + indexOfFirstItem}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.rollNo}</td>
                  <td className="px-4 py-2">{student.program}</td>
                  <td className="px-4 py-2">{student.year}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 px-4 py-6">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: Math.ceil(filteredStudents.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 mx-1 rounded-md ${
              currentPage === i + 1 ? "bg-purple-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewAllStudents;
