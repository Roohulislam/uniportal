import React, { useState } from 'react';

const AddNewCourse = () => {
  // State for form inputs
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
  });

  // State for progress bar
  const [progress, setProgress] = useState(0);

  // Update form fields and progress
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevState) => {
      const updatedDetails = { ...prevState, [name]: value };
      calculateProgress(updatedDetails);
      return updatedDetails;
    });
  };

  // Calculate progress based on non-empty fields
  const calculateProgress = (details) => {
    const filledFields = Object.values(details).filter((value) => value !== '').length;
    const totalFields = Object.keys(details).length;
    const progressPercentage = (filledFields / totalFields) * 100;
    setProgress(progressPercentage);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Course Created!');
    // Reset form after submission
    setCourseDetails({
      title: '',
      description: '',
      instructor: '',
      duration: '',
    });
    setProgress(0);
  };

  return (
    
    <div className="max-w-3xl mx-auto p-6  bg-gray-300  rounded-lg shadow-2xl">
      <h2 className="text-2xl font-semibold mb-6">Add New Course</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mb-6">{Math.round(progress)}% Completed</p>

      <form onSubmit={handleSubmit}>
        {/* Course Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={courseDetails.title}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter course title"
            required
          />
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Course Description
          </label>
          <textarea
            id="description"
            name="description"
            value={courseDetails.description}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter course description"
            required
          />
        </div>

        {/* Instructor Name */}
        <div className="mb-4">
          <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={courseDetails.instructor}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter instructor's name"
            required
          />
        </div>

        {/* Duration */}
        <div className="mb-6">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Course Duration (in weeks)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={courseDetails.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter course duration"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddNewCourse;
