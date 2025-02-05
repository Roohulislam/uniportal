import React, { useState, useEffect } from "react";

const Reports = () => {
  const [records, setRecords] = useState([]);
  const [reportData, setReportData] = useState({});
  const [courseSearch, setCourseSearch] = useState("");

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

    const grouped = mockData.reduce((acc, record) => {
      if (!acc[record.course]) {
        acc[record.course] = {
          course: record.course,
          total: 0,
          present: 0,
          absent: 0,
          late: 0,
        };
      }

      acc[record.course].total += 1;
      acc[record.course][record.status] += 1;

      return acc;
    }, {});

    setReportData(grouped);
  }, []);

  // Filter report data based on course search input
  const filteredReportData = Object.keys(reportData).filter((course) =>
    course.toLowerCase().includes(courseSearch.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Attendance Reports</h2>

      {/* Course Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by course name"
          value={courseSearch}
          onChange={(e) => setCourseSearch(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Report Data */}
      <div className="space-y-8">
        {filteredReportData.length > 0 ? (
          filteredReportData.map((courseKey) => {
            const { course, total, present, absent, late } =
              reportData[courseKey];
            return (
              <div key={course} className="space-y-4">
                <h3 className="text-xl font-bold">{course}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-700 rounded shadow">
                    <p className="font-bold text-gray-300">Total Records</p>
                    <p className="text-2xl font-semibold">{total}</p>
                  </div>
                  <div className="p-4 bg-green-700 rounded shadow">
                    <p className="font-bold text-gray-300">Present</p>
                    <p className="text-2xl font-semibold">{present}</p>
                  </div>
                  <div className="p-4 bg-red-700 rounded shadow">
                    <p className="font-bold text-gray-300">Absent</p>
                    <p className="text-2xl font-semibold">{absent}</p>
                  </div>
                  <div className="p-4 bg-yellow-700 rounded shadow">
                    <p className="font-bold text-gray-300">Late</p>
                    <p className="text-2xl font-semibold">{late}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">
            No reports found for the current search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Reports;
