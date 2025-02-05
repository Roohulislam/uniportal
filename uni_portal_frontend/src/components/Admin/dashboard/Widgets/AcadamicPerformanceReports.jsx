import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

// Pie Chart Data for Grade Distribution
const gradeData = {
  labels: ['A', 'B+', 'B', 'C'],
  datasets: [
    {
      data: [40, 30, 20, 10],
      backgroundColor: ['#28a745', '#ffc107', '#007bff', '#dc3545'],
    },
  ],
};

function AcademicPerformanceReports() {
  return (
    <div className="flex flex-col space-y-6 p-6  bg-gray-300 rounded-lg">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Academic Performance Reports</h1>
      </header>

      {/* Main Report Card Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Student Academic Summary</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Total Credits</th>
              <th className="p-2 text-left">GPA</th>
              <th className="p-2 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">John Doe</td>
              <td className="p-2">120</td>
              <td className="p-2">3.8</td>
              <td className="p-2">A</td>
            </tr>
            <tr>
              <td className="p-2">Jane Smith</td>
              <td className="p-2">115</td>
              <td className="p-2">3.6</td>
              <td className="p-2">B+</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Exam Results Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Exam Results</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-left">Marks Obtained</th>
              <th className="p-2 text-left">Total Marks</th>
              <th className="p-2 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Mathematics</td>
              <td className="p-2">85</td>
              <td className="p-2">100</td>
              <td className="p-2">A</td>
            </tr>
            <tr>
              <td className="p-2">Physics</td>
              <td className="p-2">78</td>
              <td className="p-2">100</td>
              <td className="p-2">B+</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Grade Distribution Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Grade Distribution</h2>
        <Pie data={gradeData} />
      </div>

      {/* Milestones Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Academic Milestones</h2>
        <ul className="list-disc pl-5">
          <li>Completed 120 credits</li>
          <li>Passed all semester exams</li>
          <li>Awarded Dean's List</li>
          <li>Graduated with Honors</li>
        </ul>
      </div>
    </div>
  );
}

export default AcademicPerformanceReports;
