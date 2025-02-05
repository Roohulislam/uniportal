import React, { useState } from 'react';

// Sample data for courses
const courses = [
  { id: 1, name: 'Introduction to Computer Science', enrolled: 40, total: 100 },
  { id: 2, name: 'Mathematics for Engineers', enrolled: 50, total: 60 },
  { id: 3, name: 'Physics Basics', enrolled: 30, total: 60 },
];

const ManageCourses = () => {
  // State to manage courses (for edit/delete purposes)
  const [courseList, setCourseList] = useState(courses);

  // Function to handle deleting a course
  const deleteCourse = (id) => {
    setCourseList(courseList.filter(course => course.id !== id));
  };

  // Function to calculate the completion percentage
  const getProgressPercentage = (enrolled, total) => {
    return (enrolled / total) * 100;
  };

  return (
    <div className="px-6 py-4 bg-slate-300 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Manage Courses</h2>

      <div className="space-y-6">
        {courseList.map(course => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${getProgressPercentage(course.enrolled, course.total)}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mt-1">{course.enrolled} / {course.total} students enrolled</p>

            {/* Manage buttons */}
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => alert(`Editing ${course.name}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCourse(course.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
