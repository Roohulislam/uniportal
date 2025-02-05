import React, { useState } from "react";

const CourseContent = () => {
  const courses = [
    {
      id: 1,
      name: "Artificial Intelligence",
      files: [
        {
          title: "Reinforcement Learning",
          description: "Reinforcement Learning",
          uploadDate: "23 Dec, 2024",
          downloadLink: "#",
        },
        {
          title: "Machine Learning Life Cycle",
          description: "Machine Learning Life Cycle",
          uploadDate: "13 Dec, 2024",
          downloadLink: "#",
        },
        {
          title: "Back Propagation in ANN",
          description: "Back Propagation in ANN",
          uploadDate: "10 Dec, 2024",
          downloadLink: "#",
        },
      ],
    },
    {
      id: 2,
      name: "Introduction to Automata",
      files: [
        {
          title: "Finite Automata",
          description: "Detailed study of finite automata",
          uploadDate: "17 Jan, 2024",
          downloadLink: "#",
        },
      ],
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    const course = courses.find((c) => c.id === parseInt(courseId));
    setSelectedCourse(course || null);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Course Content</h2>

      {/* Course Selection Dropdown */}
      <div className="mb-4">
        <select
          onChange={handleCourseChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">- Select Course -</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Course Details */}
      {selectedCourse ? (
        <div>
          <table className="w-full border-collapse bg-gray-700 rounded-lg shadow">
            <thead>
              <tr className="bg-purple-600">
                <th className="p-3 border-b border-gray-600">#</th>
                <th className="p-3 border-b border-gray-600">Title</th>
                <th className="p-3 border-b border-gray-600">Description</th>
                <th className="p-3 border-b border-gray-600">Upload Date</th>
                <th className="p-3 border-b border-gray-600">Download</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourse.files.map((file, index) => (
                <tr key={index} className="even:bg-gray-800 odd:bg-gray-700">
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3">{file.title}</td>
                  <td className="p-3">{file.description}</td>
                  <td className="p-3 text-center">{file.uploadDate}</td>
                  <td className="p-3 text-center">
                    <a
                      href={file.downloadLink}
                      className="text-blue-400 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">Please select a course to view its content.</p>
      )}
    </div>
  );
};

export default CourseContent;
