import React, { useState } from 'react';

const PerformanceReport = () => {
  const [search, setSearch] = useState('');
  const [data] = useState([
    { id: '1', name: 'John Doe', gpa: 3.8, attendance: 95, status: 'Pass' },
    { id: '2', name: 'Jane Smith', gpa: 2.5, attendance: 85, status: 'Fail' },
    { id: '3', name: 'Sam Wilson', gpa: 3.2, attendance: 90, status: 'Pass' },
  ]);

  const filteredData = data.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.includes(search)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-purple-100  shadow-md rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            University Performance Report
          </h1>
          <p className="text-sm text-gray-600">
            Overview of student performance for the semester
          </p>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search by Student ID or Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Performance Table */}
        <div className="p-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm text-gray-600">
                  Student ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm text-gray-600">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                  GPA
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                  Attendance (%)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((student, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                      {student.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                      {student.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-700">
                      {student.gpa}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-700">
                      {student.attendance}%
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                      <span
                        className={`px-2 py-1 rounded text-white ${
                          student.status === 'Pass'
                            ? 'bg-green-500'
                            : 'bg-red-500'
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-600 py-4"
                  >
                    No students found.
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

export default PerformanceReport;
