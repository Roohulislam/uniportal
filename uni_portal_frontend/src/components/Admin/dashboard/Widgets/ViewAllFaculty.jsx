import React, { useState } from 'react';

const ViewAllFaculty = () => {
  const [search, setSearch] = useState('');
  const facultyData = [
    { id: 'F101', name: 'Dr. Alice Johnson', department: 'Computer Science', email: 'alice.johnson@univ.edu' },
    { id: 'F102', name: 'Dr. Bob Smith', department: 'Mathematics', email: 'bob.smith@univ.edu' },
    { id: 'F103', name: 'Dr. Carol Davis', department: 'Physics', email: 'carol.davis@univ.edu' },
    { id: 'F104', name: 'Dr. David Wilson', department: 'Chemistry', email: 'david.wilson@univ.edu' },
  ];

  const filteredFaculty = facultyData.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(search.toLowerCase()) ||
      faculty.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-300 rounded-lg min-h-screen">
      <div className="max-w-7xl mx-auto  bg-gray-100 shadow-md rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Faculty Management</h1>
          <p className="text-sm text-gray-600">View and manage all faculty details.</p>
        </div>

        {/* Search Bar */}
        <div className="p-6">
          <input
            type="text"
            placeholder="Search by Faculty ID or Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Faculty Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Faculty ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Department</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredFaculty.length > 0 ? (
                filteredFaculty.map((faculty, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{faculty.id}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{faculty.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{faculty.department}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{faculty.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-600 py-4">
                    No faculty found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllFaculty;
