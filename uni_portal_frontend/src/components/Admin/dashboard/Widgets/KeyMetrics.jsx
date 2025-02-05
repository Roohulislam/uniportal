import React, { useState } from 'react';
import { FaUsers, FaDollarSign, FaChalkboardTeacher, FaUniversity, FaFlask } from 'react-icons/fa';

const KeyMetrics = () => {
  // Example data for key metrics
  const [metrics] = useState({
    activeStudents: 2500,
    totalFaculty: 150,
    revenue: 5000000,
    expenses: 4000000,
    overallRating: 4.5,
    researchFunding: 1200000,
  });

  // Calculate the net income
  const netIncome = metrics.revenue - metrics.expenses;

  return (
    <div className="p-6 space-y-6  bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">Key Metrics</h1>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaUsers className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">Active Students</h3>
          <p className="text-2xl font-bold text-gray-900">{metrics.activeStudents}</p>
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

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <FaFlask className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">Research Funding</h3>
          <p className="text-2xl font-bold text-gray-900">${metrics.researchFunding.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
