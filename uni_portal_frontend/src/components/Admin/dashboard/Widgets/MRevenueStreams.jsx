import React from 'react';
import { FaGraduationCap, FaHandHoldingUsd, FaBuilding, FaUniversity } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const MRevenueStreams = () => {
  // Example data for revenue streams
  const revenueData = {
    tuition: 1200000,
    donations: 500000,
    governmentFunds: 800000,
    other: 200000,
  };

  // Example data for the pie chart
  const chartData = {
    labels: ['Tuition', 'Donations', 'Government Funds', 'Other'],
    datasets: [
      {
        label: 'Revenue Breakdown',
        data: [
          revenueData.tuition,
          revenueData.donations,
          revenueData.governmentFunds,
          revenueData.other,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6 bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">University Revenue Streams</h1>
      
      {/* Revenue Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Tuition</h3>
            <p className="text-2xl font-semibold text-blue-600">${revenueData.tuition.toLocaleString()}</p>
          </div>
          <FaGraduationCap className="text-blue-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Donations</h3>
            <p className="text-2xl font-semibold text-green-600">${revenueData.donations.toLocaleString()}</p>
          </div>
          <FaHandHoldingUsd className="text-green-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Government Funds</h3>
            <p className="text-2xl font-semibold text-teal-600">${revenueData.governmentFunds.toLocaleString()}</p>
          </div>
          <FaBuilding className="text-teal-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Other</h3>
            <p className="text-2xl font-semibold text-yellow-600">${revenueData.other.toLocaleString()}</p>
          </div>
          <FaUniversity className="text-yellow-600 text-4xl" />
        </div>
      </div>

      {/* Pie Chart for Revenue Breakdown */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-600">Revenue Stream Distribution</h3>
        <Pie data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default MRevenueStreams;
