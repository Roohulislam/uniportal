import React, { useState, useEffect } from "react";

const EnrollmentStatus = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulated API call to fetch enrollment data
    const fetchEnrollmentData = async () => {
      setLoading(true);
      try {
        const data = [
          { id: 1, name: "John Doe", program: "CS", status: "Enrolled" },
          { id: 2, name: "Jane Smith", program: "IT", status: "Pending" },
          { id: 3, name: "Alice Johnson", program: "SE", status: "Rejected" },
          // More sample data
        ];
        setEnrollments(data);
        setFilteredEnrollments(data);
      } catch (error) {
        console.error("Error fetching enrollment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollmentData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = enrollments.filter((enrollment) =>
      enrollment.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEnrollments(filtered);
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedEnrollments = enrollments.map((enrollment) =>
      enrollment.id === id ? { ...enrollment, status: newStatus } : enrollment
    );
    setEnrollments(updatedEnrollments);
    setFilteredEnrollments(updatedEnrollments);
  };

  if (loading) {
    return <div>Loading enrollment data...</div>;
  }

  return (
    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-100 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Enrollment Status</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by student name"
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Program</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnrollments.map((enrollment, index) => (
            <tr key={enrollment.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{enrollment.name}</td>
              <td className="border border-gray-300 p-2">{enrollment.program}</td>
              <td className="border border-gray-300 p-2">{enrollment.status}</td>
              <td className="border border-gray-300 p-2">
                <select
                  value={enrollment.status}
                  onChange={(e) =>
                    handleStatusChange(enrollment.id, e.target.value)
                  }
                  className="p-1 border border-gray-300 rounded"
                >
                  <option value="Enrolled">Enrolled</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentStatus;
