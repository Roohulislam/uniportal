import React, { useState } from 'react';
import { FaUsers, FaDollarSign, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';

// Register chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const UniversityOverview = () => {
  // Example data for the university's key metrics
  const [metrics] = useState({
    totalStudents: 2500,
    totalFaculty: 150,
    revenue: 5000000,
    expenses: 4000000,
    overallRating: 4.5,
  });

  // Calculate the net income
  const netIncome = metrics.revenue - metrics.expenses;

  // Bar chart data for Financial Health
  const financialData = {
    labels: ['Revenue', 'Expenses'],
    datasets: [
      {
        label: 'Financial Health ($)',
        data: [metrics.revenue, metrics.expenses],
        backgroundColor: ['#36A2EB', '#FF5733'],
        borderColor: ['#36A2EB', '#FF5733'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6 rounded-lg  bg-gray-300   ">
      <h1 className="text-3xl font-bold text-center text-gray-800">University Overview</h1>

      {/* Overview Cards */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center ">
          <FaUsers className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">Total Students</h3>
          <p className="text-2xl font-bold text-gray-900">{metrics.totalStudents}</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaChalkboardTeacher className="text-4xl text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">Total Faculty</h3>
          <p className="text-2xl font-bold text-gray-900">{metrics.totalFaculty}</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaDollarSign className="text-4xl text-yellow-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">Net Income</h3>
          <p className="text-2xl font-bold text-gray-900">${netIncome.toLocaleString()}</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaUniversity className="text-4xl text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">University Rating</h3>
          <p className="text-2xl font-bold text-gray-900">{metrics.overallRating} / 5</p>
        </div>
      </div>

      {/* Financial Health Bar Chart */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-600">Financial Health Overview</h3>
        <Bar data={financialData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default UniversityOverview;
