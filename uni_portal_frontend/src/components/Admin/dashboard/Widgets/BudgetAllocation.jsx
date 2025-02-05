import React, { useState } from 'react';
import { FaUniversity, FaBriefcase, FaCalculator } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetAllocation = () => {
  // Initial department budget allocations
  const initialData = {
    administration: 2000000,
    research: 1500000,
    studentAffairs: 1000000,
    operations: 500000,
    other: 300000,
  };

  // State to hold the budget allocation
  const [budgetData, setBudgetData] = useState(initialData);

  // Handle change in budget allocation
  const handleChange = (department, value) => {
    setBudgetData({
      ...budgetData,
      [department]: value,
    });
  };

  // Example data for the pie chart
  const chartData = {
    labels: ['Administration', 'Research', 'Student Affairs', 'Operations', 'Other'],
    datasets: [
      {
        label: 'Budget Allocation',
        data: [
          budgetData.administration,
          budgetData.research,
          budgetData.studentAffairs,
          budgetData.operations,
          budgetData.other,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5733'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6  bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">University Budget Allocation</h1>

      {/* Budget Allocation Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-600 mb-4">Edit Budget Allocation</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Current Allocation ($)</th>
              <th className="px-4 py-2 text-left">New Allocation ($)</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(budgetData).map((department) => (
              <tr key={department} className="border-b">
                <td className="px-4 py-2">{department.replace(/([A-Z])/g, ' $1').toUpperCase()}</td>
                <td className="px-4 py-2">${budgetData[department].toLocaleString()}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={budgetData[department]}
                    onChange={(e) => handleChange(department, parseInt(e.target.value))}
                    className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart for Budget Allocation */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-600">Budget Allocation Distribution</h3>
        <Pie data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default BudgetAllocation;
