import React, { useState, useEffect } from "react";

const ViewRecords = () => {
  const [records, setRecords] = useState([]);
  const [studentSearch, setStudentSearch] = useState("");
  const [courseSearch, setCourseSearch] = useState("");
  const [groupedRecords, setGroupedRecords] = useState({});

  // Mock JSON data for attendance records
  const mockData = [
    {
      studentName: "John Doe",
      studentId: "S12345",
      course: "Course 1",
      date: "2024-12-01",
      status: "present",
    },
    {
      studentName: "Jane Smith",
      studentId: "S12346",
      course: "Course 2",
      date: "2024-12-01",
      status: "absent",
    },
    {
      studentName: "Emily Johnson",
      studentId: "S12347",
      course: "Course 1",
      date: "2024-12-02",
      status: "late",
    },
    {
      studentName: "Michael Brown",
      studentId: "S12348",
      course: "Course 3",
      date: "2024-12-03",
      status: "present",
    },
    {
      studentName: "Sarah Lee",
      studentId: "S12349",
      course: "Course 2",
      date: "2024-12-02",
      status: "present",
    },
  ];

  // Load mock data and group by course when the component mounts
  useEffect(() => {
    setRecords(mockData);

    // Group records by course
    const grouped = mockData.reduce((acc, record) => {
      if (!acc[record.course]) {
        acc[record.course] = [];
      }
      acc[record.course].push(record);
      return acc;
    }, {});
    setGroupedRecords(grouped);
  }, []);

  // Filter grouped records based on search inputs
  useEffect(() => {
    const filtered = mockData.reduce((acc, record) => {
      const courseMatches = record.course
        .toLowerCase()
        .includes(courseSearch.toLowerCase());
      const studentMatches = record.studentName
        .toLowerCase()
        .includes(studentSearch.toLowerCase());

      if (courseMatches) {
        if (!acc[record.course]) {
          acc[record.course] = [];
        }
        if (studentMatches) {
          acc[record.course].push(record);
        }
      }
      return acc;
    }, {});

    setGroupedRecords(filtered);
  }, [studentSearch, courseSearch]);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">View Attendance Records</h2>

      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div>
          <input
            type="text"
            placeholder="Search by course name"
            value={courseSearch}
            onChange={(e) => setCourseSearch(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by student name"
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Attendance Records Grouped by Course */}
      <div className="space-y-8">
        {Object.keys(groupedRecords).length > 0 ? (
          Object.keys(groupedRecords).map((course) => (
            <div key={course} className="space-y-4">
              <h3 className="text-xl font-bold">{course}</h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-700 text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-gray-700">
                        Student Name
                      </th>
                      <th className="px-4 py-2 border border-gray-700">
                        Student ID
                      </th>
                      <th className="px-4 py-2 border border-gray-700">Date</th>
                      <th className="px-4 py-2 border border-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedRecords[course].map((record) => (
                      <tr key={`${record.studentId}-${record.date}`}>
                        <td className="px-4 py-2 border border-gray-700">
                          {record.studentName}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">
                          {record.studentId}
                        </td>
                        <td className="px-4 py-2 border border-gray-700">
                          {record.date}
                        </td>
                        <td
                          className={`px-4 py-2 border border-gray-700 ${
                            record.status === "present"
                              ? "text-green-500"
                              : record.status === "absent"
                              ? "text-red-500"
                              : "text-yellow-500"
                          }`}
                        >
                          {record.status.charAt(0).toUpperCase() +
                            record.status.slice(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            No records found for the current filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewRecords;
