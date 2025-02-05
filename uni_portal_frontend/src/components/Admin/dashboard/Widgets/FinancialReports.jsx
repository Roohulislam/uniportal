import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

function FinancialReports() {
  // Dummy data for the charts
  const expenseData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Expenses',
        data: [12000, 15000, 13000, 17000],
        backgroundColor: '#007bff',
      },
      {
        label: 'Revenue',
        data: [18000, 20000, 19000, 21000],
        backgroundColor: '#28a745',
      },
    ],
  };

  const categoryDistribution = {
    labels: ['Salaries', 'Marketing', 'R&D', 'Operations', 'Miscellaneous'],
    datasets: [
      {
        data: [40, 20, 15, 15, 10],
        backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545', '#6c757d'],
      },
    ],
  };

  return (
    <div className="flex flex-col space-y-6 p-6  bg-gray-300 rounded-lg">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Financial Reports</h1>
      </header>

      {/* Financial Summary Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Financial Summary</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Total Revenue</td>
              <td className="p-2">$80,000</td>
            </tr>
            <tr>
              <td className="p-2">Total Expenses</td>
              <td className="p-2">$57,000</td>
            </tr>
            <tr>
              <td className="p-2">Net Profit</td>
              <td className="p-2">$23,000</td>
            </tr>
            <tr>
              <td className="p-2">Budget Allocated</td>
              <td className="p-2">$100,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Expense vs Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Expense vs Revenue</h2>
        <Bar
          data={expenseData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
            },
          }}
        />
      </div>

      {/* Expense Distribution Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-4">Expense Distribution</h2>
        <Pie
          data={categoryDistribution}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'bottom' },
            },
          }}
        />
      </div>

      {/* Budget Notes and Recommendations */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Budget Notes & Recommendations</h2>
        <ul className="list-disc pl-5">
          <li>Increase marketing budget by 10% to drive more revenue.</li>
          <li>Allocate 5% of net profit to Research & Development.</li>
          <li>Monitor operational expenses closely to reduce overhead costs.</li>
          <li>Plan for additional hiring under the next quarter’s budget.</li>
        </ul>
      </div>
    </div>
  );
}

export default FinancialReports;
