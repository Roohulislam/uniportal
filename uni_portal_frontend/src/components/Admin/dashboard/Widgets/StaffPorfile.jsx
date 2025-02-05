import React, { useState } from 'react';

const StaffProfile = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const staffData = [
    {
      name: 'John Doe',
      position: 'Professor of Computer Science',
      department: 'Computer Science Department',
      profilePicture: 'https://via.placeholder.com/150',
      email: 'johndoe@university.edu',
      phone: '123-456-7890',
      biography: 'Dr. John Doe is a Professor with over 10 years of experience in teaching computer science...',
      courses: ['CS101: Introduction to Programming', 'CS201: Data Structures'],
    },
    {
      name: 'Jane Smith',
      position: 'Associate Professor of Mathematics',
      department: 'Mathematics Department',
      profilePicture: 'https://via.placeholder.com/150',
      email: 'janesmith@university.edu',
      phone: '987-654-3210',
      biography: 'Dr. Jane Smith specializes in Algebra and has been teaching for 8 years...',
      courses: ['MATH101: Calculus I', 'MATH201: Linear Algebra'],
    },
    // Add more staff profiles here...
  ];

  const filteredStaffData = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-300 rounded-lg p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Display Filtered Staff Profiles */}
        {filteredStaffData.length > 0 ? (
          filteredStaffData.map((staff, index) => (
            <div
              key={index}
              className="mt-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={staff.profilePicture || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">{staff.name}</h2>
                  <p className="text-sm text-gray-600">{staff.position}</p>
                  <p className="text-sm text-gray-600">{staff.department}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                <div className="mt-4">
                  <p className="text-sm text-gray-600"><strong>Email:</strong> {staff.email}</p>
                  <p className="text-sm text-gray-600"><strong>Phone:</strong> {staff.phone}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Biography</h3>
                <p className="text-sm text-gray-600 mt-4">{staff.biography}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Courses Taught</h3>
                <ul className="mt-4 space-y-2">
                  {staff.courses.map((course, index) => (
                    <li key={index} className="text-sm text-gray-600">{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-6 text-lg text-gray-600">No staff found for this search query.</p>
        )}
      </div>
    </div>
  );
};

export default StaffProfile;
