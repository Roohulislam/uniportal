import React from "react";

const McqsTestTable = () => {
  const tests = [
    {
      id: 1,
      testTitle: "Quiz",
      courseTitle: "Theory of Automata (CSC312)",
      startDateTime: "May 05, 2024 4:00 PM",
      endDateTime: "May 05, 2024 4:00 PM",
      action: "View Result",
    },
    {
      id: 2,
      testTitle: "Quiz 2",
      courseTitle: "Machine Learning (CSC354)",
      startDateTime: "Dec 14, 2023 9:00 PM",
      endDateTime: "Dec 14, 2023 9:10 PM",
      action: "View Result",
    },
    {
      id: 3,
      testTitle: "Quiz 1",
      courseTitle: "Machine Learning (CSC354)",
      startDateTime: "Oct 19, 2023 9:00 PM",
      endDateTime: "Oct 19, 2023 9:07 PM",
      action: "View Result",
    },
    {
      id: 4,
      testTitle: "React",
      courseTitle: "Web Technologies (CSC336)",
      startDateTime: "Jul 05, 2023 4:30 PM",
      endDateTime: "Jul 05, 2023 5:05 PM",
      action: "View Result",
    },
    {
      id: 5,
      testTitle: "Quiz 1 - Introduction to the Theory of Computation",
      courseTitle: "Theory of Automata (CSC312)",
      startDateTime: "Apr 05, 2023 11:00 AM",
      endDateTime: "Apr 05, 2023 11:20 AM",
      action: "View Result",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-3xl font-extrabold text-center mb-6">MCQs Test</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-600">#</th>
              <th className="px-4 py-2 border border-gray-600">Test Title</th>
              <th className="px-4 py-2 border border-gray-600">Course Title</th>
              <th className="px-4 py-2 border border-gray-600">
                Start Date Time
              </th>
              <th className="px-4 py-2 border border-gray-600">
                End Date Time
              </th>
              <th className="px-4 py-2 border border-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {tests.map((test, index) => (
              <tr
                key={test.id}
                className="hover:bg-purple-800 transition-colors duration-200"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{test.testTitle}</td>
                <td className="px-4 py-2">{test.courseTitle}</td>
                <td className="px-4 py-2">{test.startDateTime}</td>
                <td className="px-4 py-2">{test.endDateTime}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => alert(`Viewing result for ${test.testTitle}`)}
                    className="text-blue-500 hover:text-blue-300 transition-colors duration-200"
                  >
                    {test.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default McqsTestTable;
