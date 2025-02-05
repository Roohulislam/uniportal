import React, { useState } from 'react';

const CourseSchedule = () => {
  // State for storing new schedule data and list of courses
  const [schedule, setSchedule] = useState({
    courseName: '',
    instructor: '',
    day: '',
    time: '',
    room: ''
  });

  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Check for schedule conflicts
  const checkForConflicts = (newSchedule) => {
    // Check if there's a course scheduled at the same day/time
    const conflict = courses.some(
      (course) =>
        course.day === newSchedule.day && course.time === newSchedule.time
    );

    // Check if the room is already booked for the same day/time
    const roomConflict = courses.some(
      (course) =>
        course.room === newSchedule.room &&
        course.day === newSchedule.day &&
        course.time === newSchedule.time
    );

    if (conflict) {
      setError('Conflict detected: Another course is scheduled at this time.');
      return true;
    }

    if (roomConflict) {
      setError('Room conflict: This room is already booked at this time.');
      return true;
    }

    // No conflicts
    return false;
  };

  // Handle form submission to add a new course schedule
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there is a conflict with existing schedules
    if (checkForConflicts(schedule)) {
      return;
    }

    // No conflict, add new schedule
    setCourses([...courses, schedule]);
    setSchedule({ courseName: '', instructor: '', day: '', time: '', room: '' }); // Reset form
    setError(''); // Reset error message
  };

  // Handle course selection to display its details
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-slate-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Add Course Schedule</h2>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Course Schedule Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={schedule.courseName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
              Instructor
            </label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              value={schedule.instructor}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="day" className="block text-sm font-medium text-gray-700">
              Day of the Week
            </label>
            <select
              id="day"
              name="day"
              value={schedule.day}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={schedule.time}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="room" className="block text-sm font-medium text-gray-700">
              Room
            </label>
            <input
              type="text"
              id="room"
              name="room"
              value={schedule.room}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Schedule
        </button>
      </form>

      {/* Search for Courses */}
      <div className="mt-6 mb-4">
        <label className="block text-sm font-medium text-gray-700">Search for a Course</label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search by course name"
        />
      </div>

      {/* Displaying Filtered Courses */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Scheduled Courses</h3>
        {filteredCourses.length === 0 ? (
          <p className="text-gray-500">No courses found.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300 text-left">Course Name</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Instructor</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Day</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Time</th>
                <th className="px-4 py-2 border border-gray-300 text-left">Room</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr
                  key={index}
                  onClick={() => handleCourseSelect(course)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border border-gray-300">{course.courseName}</td>
                  <td className="px-4 py-2 border border-gray-300">{course.instructor}</td>
                  <td className="px-4 py-2 border border-gray-300">{course.day}</td>
                  <td className="px-4 py-2 border border-gray-300">{course.time}</td>
                  <td className="px-4 py-2 border border-gray-300">{course.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Course Details */}
      {selectedCourse && (
        <div className="mt-12 p-6 bg-blue-100 rounded-lg">
          <h3 className="text-xl font-semibold">Course Details</h3>
          <p><strong>Course Name:</strong> {selectedCourse.courseName}</p>
          <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
          <p><strong>Day:</strong> {selectedCourse.day}</p>
          <p><strong>Time:</strong> {selectedCourse.time}</p>
          <p><strong>Room:</strong> {selectedCourse.room}</p>
        </div>
      )}
    </div>
  );
};

export default CourseSchedule;
