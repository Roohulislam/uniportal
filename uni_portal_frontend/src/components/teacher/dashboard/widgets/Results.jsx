import React, { useState } from "react";
import { FaSearch, FaEdit, FaSave } from "react-icons/fa";

const Result = () => {
  const [results, setResults] = useState([
    {
      id: 1,
      studentName: "John Doe",
      course: "Mathematics",
      examType: "Mid-Term",
      grade: "B",
      labCourse: "Physics Lab",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      course: "Chemistry",
      examType: "Final-Term",
      grade: "A",
      labCourse: "Chemistry Lab",
    },
    {
      id: 3,
      studentName: "Emily Johnson",
      course: "Biology",
      examType: "Quiz 1",
      grade: "C",
      labCourse: "Biology Lab",
    },
    {
      id: 4,
      studentName: "Michael Brown",
      course: "Physics",
      examType: "Quiz 2",
      grade: "B+",
      labCourse: "Physics Lab",
    },
    {
      id: 5,
      studentName: "Sarah Lee",
      course: "Mathematics",
      examType: "Final-Term",
      grade: "A-",
      labCourse: "None",
    },
  ]);

  const [searchCourse, setSearchCourse] = useState("");
  const [searchLab, setSearchLab] = useState("");
  const [editingGrade, setEditingGrade] = useState(null); // To track the grade being edited
  const [newGrade, setNewGrade] = useState(""); // To hold the new grade value

  // Group results by course
  const groupedResults = results.reduce((acc, result) => {
    const { course } = result;
    if (!acc[course]) acc[course] = [];
    acc[course].push(result);
    return acc;
  }, {});

  // Filter courses and labs based on search
  const filteredCourses = Object.keys(groupedResults).filter((course) =>
    course.toLowerCase().includes(searchCourse.toLowerCase())
  );

  const filteredLabResults = results.filter((result) =>
    result.labCourse.toLowerCase().includes(searchLab.toLowerCase())
  );

  // Handle grade editing
  const handleEditGrade = (id, currentGrade) => {
    setEditingGrade(id);
    setNewGrade(currentGrade);
  };

  const handleSaveGrade = (id) => {
    setResults((prevResults) =>
      prevResults.map((result) =>
        result.id === id ? { ...result, grade: newGrade } : result
      )
    );
    setEditingGrade(null);
    setNewGrade("");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Exam Results</h2>

      {/* Search by Course */}
      <div className="flex flex-col md:flex-row md:gap-4 mb-6">
        <div className="flex items-center gap-2 flex-1">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by Course"
            value={searchCourse}
            onChange={(e) => setSearchCourse(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        {/* Search by Lab */}
        <div className="flex items-center gap-2 flex-1">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by Lab"
            value={searchLab}
            onChange={(e) => setSearchLab(e.target.value)}
            className="p-2 bg-gray-800 border border-gray-700 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Results by Course */}
      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-400">No courses found.</p>
      ) : (
        filteredCourses.map((course) => (
          <div key={course} className="mb-6">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
              {course}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto bg-gray-700 rounded-lg shadow">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="py-2 px-4 text-left">Student Name</th>
                    <th className="py-2 px-4 text-left">Exam Type</th>
                    <th className="py-2 px-4 text-left">Grade</th>
                    <th className="py-2 px-4 text-left">Lab Course</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedResults[course].map((result) => (
                    <tr
                      key={result.id}
                      className="border-b border-gray-600 hover:bg-gray-600"
                    >
                      <td className="py-2 px-4">{result.studentName}</td>
                      <td className="py-2 px-4">{result.examType}</td>
                      <td className="py-2 px-4">
                        {editingGrade === result.id ? (
                          <input
                            type="text"
                            value={newGrade}
                            onChange={(e) => setNewGrade(e.target.value)}
                            className="w-20 p-1 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                          />
                        ) : (
                          result.grade
                        )}
                      </td>
                      <td className="py-2 px-4">{result.labCourse}</td>
                      <td className="py-2 px-4 text-center">
                        {editingGrade === result.id ? (
                          <button
                            onClick={() => handleSaveGrade(result.id)}
                            className="bg-green-500 text-white py-1 px-3 rounded shadow-md hover:bg-green-600"
                          >
                            <FaSave className="inline-block mr-1" />
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleEditGrade(result.id, result.grade)
                            }
                            className="bg-blue-500 text-white py-1 px-3 rounded shadow-md hover:bg-blue-600"
                          >
                            <FaEdit className="inline-block mr-1" />
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}

      {/* Filtered Lab Results */}
      {searchLab && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
            Lab Course Results
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-gray-700 rounded-lg shadow">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-2 px-4 text-left">Student Name</th>
                  <th className="py-2 px-4 text-left">Course</th>
                  <th className="py-2 px-4 text-left">Exam Type</th>
                  <th className="py-2 px-4 text-left">Lab Course</th>
                </tr>
              </thead>
              <tbody>
                {filteredLabResults.map((result) => (
                  <tr
                    key={result.id}
                    className="border-b border-gray-600 hover:bg-gray-600"
                  >
                    <td className="py-2 px-4">{result.studentName}</td>
                    <td className="py-2 px-4">{result.course}</td>
                    <td className="py-2 px-4">{result.examType}</td>
                    <td className="py-2 px-4">{result.labCourse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
