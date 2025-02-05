import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ResultAnalytics = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call with a delay
        const results = [
          { student: 'John Doe', score: 85 },
          { student: 'Jane Smith', score: 90 },
          { student: 'Alex Johnson', score: 75 },
          { student: 'Emily Davis', score: 92 },
        ];

        // Prepare the data for the chart
        const data = {
          labels: results.map((result) => result.student),
          datasets: [
            {
              label: 'Scores',
              data: results.map((result) => result.score),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };

        // Set the chart data
        setChartData(data);
      } catch (err) {
        setError('Failed to load data');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Conditional rendering for loading and error states
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <p className="text-gray-500">Loading chart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Results Analytics</h2>
      <div className="w-full h-[400px]">
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default ResultAnalytics;
