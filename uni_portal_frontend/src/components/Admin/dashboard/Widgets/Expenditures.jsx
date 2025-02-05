import React from 'react';
import { FaUserTie, FaWrench, FaBuilding, FaCashRegister } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Expenditures = () => {
  // Example data for expenditures
  const expendituresData = {
    salaries: 1500000,
    operationalCosts: 500000,
    overheads: 300000,
    other: 200000,
  };

  // Example data for the pie chart
  const chartData = {
    labels: ['Salaries', 'Operational Costs', 'Overheads', 'Other'],
    datasets: [
      {
        label: 'Expenditure Breakdown',
        data: [
          expendituresData.salaries,
          expendituresData.operationalCosts,
          expendituresData.overheads,
          expendituresData.other,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6  bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">University Expenditures</h1>
      
      {/* Expense Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Salaries</h3>
            <p className="text-2xl font-semibold text-blue-600">${expendituresData.salaries.toLocaleString()}</p>
          </div>
          <FaUserTie className="text-blue-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Operational Costs</h3>
            <p className="text-2xl font-semibold text-green-600">${expendituresData.operationalCosts.toLocaleString()}</p>
          </div>
          <FaWrench className="text-green-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Overheads</h3>
            <p className="text-2xl font-semibold text-teal-600">${expendituresData.overheads.toLocaleString()}</p>
          </div>
          <FaBuilding className="text-teal-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Other</h3>
            <p className="text-2xl font-semibold text-yellow-600">${expendituresData.other.toLocaleString()}</p>
          </div>
          <FaCashRegister className="text-yellow-600 text-4xl" />
        </div>
      </div>

      {/* Pie Chart for Expenditure Breakdown */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-600">Expenditure Distribution</h3>
        <Pie data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Expenditures;
