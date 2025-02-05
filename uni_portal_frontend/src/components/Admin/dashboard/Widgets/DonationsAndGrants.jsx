import React, { useState } from 'react';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { FaHandshake, FaMoneyBillWave, FaGift } from 'react-icons/fa';


// Register chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const DonationsAndGrants = () => {
  // Example donations, sponsorships, and grants data
  const initialContributions = [
    { type: 'Donation', donor: 'John Doe', amount: 5000, date: '2024-12-01' },
    { type: 'Grant', donor: 'XYZ Foundation', amount: 20000, date: '2024-11-15' },
    { type: 'Sponsorship', donor: 'ABC Corp.', amount: 10000, date: '2024-10-05' },
    { type: 'Donation', donor: 'Jane Smith', amount: 3000, date: '2024-09-20' },
    { type: 'Grant', donor: 'Government Fund', amount: 15000, date: '2024-08-11' },
  ];

  // State to hold the contributions data
  const [contributions, setContributions] = useState(initialContributions);

  // Aggregate totals for each category
  const totals = contributions.reduce(
    (acc, contribution) => {
      acc[contribution.type.toLowerCase()] += contribution.amount;
      return acc;
    },
    { donation: 0, grant: 0, sponsorship: 0 }
  );

  // Example data for the bar chart (donations, grants, sponsorships)
  const chartData = {
    labels: ['Donations', 'Grants', 'Sponsorships'],
    datasets: [
      {
        label: 'Total Contributions ($)',
        data: [totals.donation, totals.grant, totals.sponsorship],
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6  bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">Donations & Grants</h1>

      {/* Contributions Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-600 mb-4">Contributions List</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Donor</th>
              <th className="px-4 py-2 text-left">Amount ($)</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((contribution, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{contribution.type}</td>
                <td className="px-4 py-2">{contribution.donor}</td>
                <td className="px-4 py-2">${contribution.amount.toLocaleString()}</td>
                <td className="px-4 py-2">{contribution.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart for Total Contributions */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-600">Total Contributions Overview</h3>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>

      {/* Total Summary */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-600">Total Donations</h3>
          <p className="text-2xl font-semibold text-blue-600">${totals.donation.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-600">Total Grants</h3>
          <p className="text-2xl font-semibold text-green-600">${totals.grant.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-600">Total Sponsorships</h3>
          <p className="text-2xl font-semibold text-yellow-600">${totals.sponsorship.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationsAndGrants;
