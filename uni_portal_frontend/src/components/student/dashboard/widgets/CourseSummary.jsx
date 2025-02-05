import React from "react";

const CourseSummary = () => {
  const courses = [
    {
      id: 1,
      title: "Artificial Intelligence",
      class: "BCS 10 Attached with BSE 6B",
      faculty: "Dr. Ahmad Saeed",
      lectures: 43,
      present: 30,
      absent: 13,
      thyPercentage: "64%",
      labPercentage: "78%",
    },
    {
      id: 2,
      title: "Compiler Construction",
      class: "BCS 5 Rep",
      faculty: "Kainat Khalid (VF)",
      lectures: 33,
      present: 29,
      absent: 4,
      thyPercentage: "83%",
      labPercentage: "90%",
    },
    {
      id: 3,
      title: "Data Communications and Computer Networks",
      class: "BCS 7 Attach with BCS-6B",
      faculty: "Sana Malik",
      lectures: 35,
      present: 28,
      absent: 7,
      thyPercentage: "85%",
      labPercentage: "77%",
    },
    {
      id: 4,
      title: "Differential Equations",
      class: "BSE 9 Attachment",
      faculty: "Dr. Saeed Ullah Jan",
      lectures: 32,
      present: 26,
      absent: 6,
      thyPercentage: "81%",
      labPercentage: "N/A",
    },
    {
      id: 5,
      title: "Machine Learning",
      class: "BCS 7 B",
      faculty: "Aisha",
      lectures: 27,
      present: 25,
      absent: 2,
      thyPercentage: "93%",
      labPercentage: "N/A",
    },
    {
      id: 6,
      title: "Mobile Application Development",
      class: "BCS 7 B",
      faculty: "Yasar Khan",
      lectures: 37,
      present: 31,
      absent: 6,
      thyPercentage: "82%",
      labPercentage: "85%",
    },
    {
      id: 7,
      title: "Software Project Management",
      class: "BCS 10 Attached with BSE 6R",
      faculty: "Ehtisham Ul Haque",
      lectures: 25,
      present: 22,
      absent: 3,
      thyPercentage: "88%",
      labPercentage: "N/A",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-lg min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-6">Course Summary</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-600">S#</th>
              <th className="px-4 py-2 border border-gray-600">Course Title</th>
              <th className="px-4 py-2 border border-gray-600">Class</th>
              <th className="px-4 py-2 border border-gray-600">Faculty</th>
              <th className="px-4 py-2 border border-gray-600">Lectures</th>
              <th className="px-4 py-2 border border-gray-600">Present</th>
              <th className="px-4 py-2 border border-gray-600">Absent</th>
              <th className="px-4 py-2 border border-gray-600">Thy%</th>
              <th className="px-4 py-2 border border-gray-600">Lab%</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {courses.map((course, index) => (
              <tr
                key={course.id}
                className="hover:bg-purple-800 transition-colors duration-200"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{course.title}</td>
                <td className="px-4 py-2">{course.class}</td>
                <td className="px-4 py-2">{course.faculty}</td>
                <td className="px-4 py-2">{course.lectures}</td>
                <td className="px-4 py-2 text-green-500">{course.present}</td>
                <td className="px-4 py-2 text-red-500">{course.absent}</td>
                <td className="px-4 py-2">{course.thyPercentage}</td>
                <td className="px-4 py-2">{course.labPercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseSummary;
