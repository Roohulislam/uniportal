import React from 'react';
import { FaMoneyBillAlt, FaChartLine, FaCreditCard, FaWallet } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FinancialOverview = () => {
  // Example data for the financial indicators
  const financialData = {
    totalRevenue: 5000000,
    totalExpenses: 3000000,
    profit: 2000000,
    budget: 4500000,
    actual: 5000000,
  };

  // Example data for the chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue vs Expenses',
        data: [400000, 450000, 500000, 600000, 650000, 700000],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6 bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">University Financial Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Financial Cards */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Total Revenue</h3>
            <p className="text-2xl font-semibold text-green-600">${financialData.totalRevenue.toLocaleString()}</p>
          </div>
          <FaMoneyBillAlt className="text-green-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Total Expenses</h3>
            <p className="text-2xl font-semibold text-red-600">${financialData.totalExpenses.toLocaleString()}</p>
          </div>
          <FaCreditCard className="text-red-600 text-4xl" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-600">Profit</h3>
            <p className="text-2xl font-semibold text-blue-600">${financialData.profit.toLocaleString()}</p>
          </div>
          <FaWallet className="text-blue-600 text-4xl" />
        </div>
      </div>

      {/* Budget vs Actual Comparison */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-600">Budget vs Actual</h3>
        <div className="flex justify-between mt-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Budget</p>
            <p className="text-2xl font-semibold text-yellow-600">${financialData.budget.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Actual</p>
            <p className="text-2xl font-semibold text-teal-600">${financialData.actual.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Line Chart for financial data */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-600">Financial Trends</h3>
        <Line data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  );
};

export default FinancialOverview;
