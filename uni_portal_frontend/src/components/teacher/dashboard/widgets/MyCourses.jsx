import React from "react";

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      name: "Introduction to Computer Science",
      description: "Basics of computer science, algorithms, and programming.",
      schedule: "Monday & Wednesday, 10:00 AM - 11:30 AM",
      studentsEnrolled: 45,
    },
    {
      id: 2,
      name: "Data Structures and Algorithms",
      description: "In-depth study of data structures and algorithm design.",
      schedule: "Tuesday & Thursday, 12:00 PM - 1:30 PM",
      studentsEnrolled: 40,
    },
    {
      id: 3,
      name: "Web Development",
      description:
        "Full-stack development including HTML, CSS, JavaScript, and React.",
      schedule: "Friday, 2:00 PM - 4:00 PM",
      studentsEnrolled: 30,
    },
    {
      id: 3,
      name: "Web Development",
      description:
        "Full-stack development including HTML, CSS, JavaScript, and React.",
      schedule: "Friday, 2:00 PM - 4:00 PM",
      studentsEnrolled: 30,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition h-[300px] relative"
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-700">
              {course.name}
            </h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Schedule:</strong> {course.schedule}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Students Enrolled:</strong> {course.studentsEnrolled}
            </p>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded
                         hover:bg-purple-700 transition absolute bottom-0 mb-4"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
