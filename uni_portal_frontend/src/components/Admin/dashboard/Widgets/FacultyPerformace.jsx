import  { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  

const FacultyPerformance = () => {
  // State to store faculty performance data
  const [performanceData, setPerformanceData] = useState({
    teaching: 0,
    research: 0,
    feedback: 0,
    overall: 0,
  });

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Fetch data from Django API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/faculty-performance/")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setPerformanceData({
            teaching: data[0].teaching_performance,
            research: data[0].research_performance,
            feedback: data[0].student_feedback,
            overall: data[0].overall_performance,
          });
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-300 rounded-lg min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Faculty Performance Overview</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search by Faculty Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Teaching Performance */}
          <PerformanceCard title="Teaching Performance" value={performanceData.teaching} color="#4caf50" />
          {/* Research Performance */}
          <PerformanceCard title="Research Performance" value={performanceData.research} color="#2196f3" />
          {/* Student Feedback */}
          <PerformanceCard title="Student Feedback" value={performanceData.feedback} color="#ff9800" />
          {/* Overall Performance */}
          <PerformanceCard title="Overall Performance" value={performanceData.overall} color="#9c27b0" />
        </div>
      </div>
    </div>
  );
};

// Reusable component for performance cards
// eslint-disable-next-line react/prop-types
const PerformanceCard = ({ title, value, color }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-lg font-medium text-gray-700 mb-4">{title}</h2>
    <div className="w-32 h-32">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        strokeWidth={10}
        styles={{
          path: { stroke: color },
          text: { fill: color, fontSize: '18px' },
        }}
      />
    </div>
  </div>
);

export default FacultyPerformance;
