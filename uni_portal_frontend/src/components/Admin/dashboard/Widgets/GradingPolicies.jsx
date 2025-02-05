import React, { useState } from "react";

const GradingPolicies = () => {
  // State to manage grading scale
  const [gradingScale, setGradingScale] = useState({
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0,
  });

  // State to manage weighting
  const [weighting, setWeighting] = useState({
    finalExam: 50,
    assignments: 30,
    participation: 20,
  });

  // Handle grade scale change
  const handleGradeChange = (grade, value) => {
    setGradingScale({
      ...gradingScale,
      [grade]: value,
    });
  };

  // Handle weighting change
  const handleWeightingChange = (component, value) => {
    setWeighting({
      ...weighting,
      [component]: value,
    });
  };

  // Handle form submission (saving the policies)
  const handleSave = () => {
    // Here you can integrate with your backend API to save the grading policies
    alert("Grading policies saved successfully!");
  };

  // Handle reset (discard changes)
  const handleReset = () => {
    setGradingScale({
      A: 90,
      B: 80,
      C: 70,
      D: 60,
      F: 0,
    });
    setWeighting({
      finalExam: 50,
      assignments: 30,
      participation: 20,
    });
  };

  return (
    <div className="container mx-auto p-6  bg-gray-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Grading Policies Management</h1>

      {/* Grading Scale Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Grade Scale</h2>
        <div className="space-y-4">
          {Object.entries(gradingScale).map(([grade, minScore]) => (
            <div key={grade} className="flex items-center">
              <label className="w-24 font-medium">{grade}</label>
              <input
                type="number"
                value={minScore}
                onChange={(e) => handleGradeChange(grade, e.target.value)}
                className="border rounded-md p-2 w-24"
              />
              <span className="ml-2">Minimum Score</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weighting Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Weighting</h2>
        <div className="space-y-4">
          {Object.entries(weighting).map(([component, weight]) => (
            <div key={component} className="flex items-center">
              <label className="w-48 font-medium capitalize">{component}</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => handleWeightingChange(component, e.target.value)}
                className="border rounded-md p-2 w-24"
                min="0"
                max="100"
              />
              <span className="ml-2">Weight Percentage</span>
            </div>
          ))}
        </div>
      </div>

      {/* Save and Reset Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Save Policies
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Reset Changes
        </button>
      </div>
    </div>
  );
};

export default GradingPolicies;
