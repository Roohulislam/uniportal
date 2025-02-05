import React, { useState } from 'react';

const EnrollmentRequests = () => {
  // State for storing requests
  const [requests, setRequests] = useState([
    { studentName: 'John Doe', courseName: 'React Development', status: 'Pending' },
    { studentName: 'Jane Smith', courseName: 'Data Science', status: 'Pending' },
    { studentName: 'Mark Lee', courseName: 'Machine Learning', status: 'Pending' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter requests based on the search query
  const filteredRequests = requests.filter(
    (request) =>
      request.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Approve a request
  const handleApprove = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Approved';
    setRequests(updatedRequests);
  };

  // Reject a request
  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Rejected';
    setRequests(updatedRequests);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Enrollment Requests</h2>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Search Field for Requests */}
      <div className="mt-6 mb-4">
        <label className="block text-sm font-medium text-gray-700">Search Enrollment Requests</label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search by student name or course name"
        />
      </div>

      {/* Displaying Enrollment Requests */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Requests</h3>
        {filteredRequests.length === 0 ? (
          <p className="text-gray-500">No requests found.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-left">Student Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Course Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Status</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300">{request.studentName}</td>
                  <td className="px-4 py-2 border border-gray-300">{request.courseName}</td>
                  <td className="px-4 py-2 border border-gray-300">{request.status}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {request.status === 'Pending' ? (
                      <>
                        <button
                          onClick={() => handleApprove(index)}
                          className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(index)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EnrollmentRequests;
