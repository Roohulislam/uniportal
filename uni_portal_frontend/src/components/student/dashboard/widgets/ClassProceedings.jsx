import React from "react";

const ClassProceedings = () => {
  const classData = {
    course: "Differential Equations",
    faculty: "Dr. Saeed Ullah Jan",
    totalClasses: 32,
    presents: 26,
    absents: 6,
    percentage: "81%",
    lectures: [
      {
        lectureNo: 32,
        date: "Friday, Dec 20, 2024",
        topic: "Ex #7. 4",
        status: "P",
      },
      {
        lectureNo: 31,
        date: "Thursday, Dec 19, 2024",
        topic: "Ex #7. 4 DE by Laplace transformations",
        status: "P",
      },
      {
        lectureNo: 30,
        date: "Wednesday, Dec 18, 2024",
        topic: "Ex #7. 3",
        status: "A",
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-lg border border-blue-200">
      <h2 className="text-4xl font-extrabold text-center text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
        Class Proceedings
      </h2>

      {/* Course Info Section */}
      <div className="p-6 mb-8 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg border border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-800">
                Course:
              </span>{" "}
              {classData.course}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-800">
                Faculty:
              </span>{" "}
              {classData.faculty}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center py-3 rounded-lg bg-white shadow-md border border-gray-300">
              <p className="text-sm text-gray-600">Present</p>
              <p className="text-2xl font-bold text-green-600">
                {classData.presents}
              </p>
            </div>
            <div className="text-center py-3 rounded-lg bg-white shadow-md border border-gray-300">
              <p className="text-sm text-gray-600">Absent</p>
              <p className="text-2xl font-bold text-red-600">
                {classData.absents}
              </p>
            </div>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700"
            style={{ width: classData.percentage }}
          ></div>
        </div>
      </div>

      {/* Lectures Table */}
      <div className="overflow-hidden rounded-lg border border-blue-200 bg-gradient-to-br from-white to-blue-50 shadow-lg">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white text-sm">
              <th className="px-4 py-3 text-left font-medium">Lecture#</th>
              <th className="px-4 py-3 text-left font-medium">Date</th>
              <th className="px-4 py-3 text-left font-medium">Topics</th>
              <th className="px-4 py-3 text-center font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-100">
            {classData.lectures.map((lecture) => (
              <tr
                key={lecture.lectureNo}
                className="hover:bg-blue-100 transition duration-200"
              >
                <td className="px-4 py-3 text-sm text-gray-800">
                  {lecture.lectureNo}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  {lecture.date}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  {lecture.topic}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      lecture.status === "P"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {lecture.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassProceedings;
