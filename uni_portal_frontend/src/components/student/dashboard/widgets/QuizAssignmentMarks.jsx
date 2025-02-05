import React from "react";

const QuizAssignmentMarks = () => {
  const data = {
    course: "Differential Equations",
    faculty: "Dr. Saeed Ullah Jan",
    quizMarks: [
      {
        id: 1,
        date: "Oct 24, 2024",
        topic: "Quiz1",
        total: 10,
        obtained: 7,
        percentage: 70,
      },
      {
        id: 2,
        date: "Nov 29, 2024",
        topic: "Quiz2",
        total: 10,
        obtained: 8,
        percentage: 80,
      },
    ],
    assignmentMarks: [
      {
        id: 1,
        date: "Oct 24, 2024",
        topic: "Assign1",
        total: 20,
        obtained: 18,
        percentage: 90,
      },
      {
        id: 2,
        date: "Dec 07, 2024",
        topic: "Assign2",
        total: 20,
        obtained: 17,
        percentage: 85,
      },
    ],
    midtermMarks: [
      {
        id: 1,
        date: "Nov 07, 2024",
        topic: "MidTerm",
        total: 25,
        obtained: 16,
        percentage: 64,
      },
    ],
  };

  const renderProgressBar = (percentage) => {
    return (
      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${
            percentage >= 75
              ? "from-green-500 to-green-600"
              : percentage >= 60
              ? "from-yellow-500 to-yellow-600"
              : "from-red-500 to-red-600"
          } rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const renderTable = (title, marksData) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-700">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2 text-sm font-semibold">S.No</th>
                <th className="px-4 py-2 text-sm font-semibold">Date</th>
                <th className="px-4 py-2 text-sm font-semibold">Topic</th>
                <th className="px-4 py-2 text-sm font-semibold text-center">Total</th>
                <th className="px-4 py-2 text-sm font-semibold text-center">Obtained</th>
                <th className="px-4 py-2 text-sm font-semibold text-center">%</th>
                <th className="px-4 py-2 text-sm font-semibold">Progress</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((mark, index) => (
                <tr key={mark.id} className="hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{mark.date}</td>
                  <td className="px-4 py-2">{mark.topic}</td>
                  <td className="px-4 py-2 text-center">{mark.total}</td>
                  <td className="px-4 py-2 text-center">{mark.obtained}</td>
                  <td className="px-4 py-2 text-center">{mark.percentage}%</td>
                  <td className="px-4 py-2">{renderProgressBar(mark.percentage)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Quiz Assignment Marks</h2>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-700">
        <p className="text-lg">
          <span className="font-bold">Course:</span> {data.course}
        </p>
        <p className="text-lg">
          <span className="font-bold">Faculty:</span> {data.faculty}
        </p>
      </div>
      {renderTable("Quiz Marks", data.quizMarks)}
      {renderTable("Assignment Marks", data.assignmentMarks)}
      {renderTable("Midterm Marks", data.midtermMarks)}
    </div>
  );
};

export default QuizAssignmentMarks;
