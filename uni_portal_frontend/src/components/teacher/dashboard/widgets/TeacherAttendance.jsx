import React from 'react';

const TeacherAttendance = () => {
  const attendanceData = [
    { date: '2024-01-10', status: 'Present' },
    { date: '2024-01-11', status: 'Absent' },
    { date: '2024-01-12', status: 'Present' },
    { date: '2024-01-13', status: 'Present' },
    { date: '2024-01-14', status: 'Present' },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-white to-green-50 shadow-lg rounded-lg border border-green-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Attendance Overview</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border-collapse rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/50">
            {attendanceData.map((entry, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                } hover:bg-white/50 transition-colors duration-200`}
              >
                <td className="px-4 py-3">{entry.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      entry.status === 'Present'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherAttendance;