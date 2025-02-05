import React, { useState } from 'react';

const AssignCourses = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [assignedCourses, setAssignedCourses] = useState([]);

  const facultyData = [
    { id: 'F101', name: 'Dr. Alice Johnson' },
    { id: 'F102', name: 'Dr. Bob Smith' },
    { id: 'F103', name: 'Dr. Carol Davis' },
    { id: 'F104', name: 'Dr. David Wilson' },
  ];

  const courses = ['Mathematics 101', 'Physics 201', 'Chemistry 301', 'Computer Science 101'];

  const handleAssignCourse = () => {
    if (selectedFaculty && selectedCourse) {
      const newAssignment = {
        facultyId: selectedFaculty,
        facultyName: facultyData.find(faculty => faculty.id === selectedFaculty).name,
        course: selectedCourse,
      };
      setAssignedCourses([...assignedCourses, newAssignment]);
      setSelectedFaculty('');
      setSelectedCourse('');
    } else {
      alert('Please select both faculty and course.');
    }
  };

  return (
    <div className="p-6 bg-gray-300 rounded-lg min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Assign Course to Faculty</h1>
        </div>

        {/* Assign Course Form */}
        <div className="mb-6">
          <div className="mb-4">
            <label htmlFor="faculty" className="block text-sm font-medium text-gray-600 mb-2">
              Select Faculty
            </label>
            <select
              id="faculty"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
            >
              <option value="">Select Faculty</option>
              {facultyData.map((faculty) => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="course" className="block text-sm font-medium text-gray-600 mb-2">
              Select Course
            </label>
            <select
              id="course"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 focus:outline-none"
              onClick={() => {
                setSelectedFaculty('');
                setSelectedCourse('');
              }}
            >
              Reset
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
              onClick={handleAssignCourse}
            >
              Assign Course
            </button>
          </div>
        </div>

        {/* Assigned Courses List */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Assigned Courses</h2>
          {assignedCourses.length > 0 ? (
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Faculty</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">Course</th>
                </tr>
              </thead>
              <tbody>
                {assignedCourses.map((assignment, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                      {assignment.facultyName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                      {assignment.course}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">No courses assigned yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignCourses;
