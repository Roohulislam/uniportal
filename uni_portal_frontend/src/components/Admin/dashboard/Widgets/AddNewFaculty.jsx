import React, { useState } from 'react';

const AddNewFaculty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [facultyDetails, setFacultyDetails] = useState({
    id: '',
    name: '',
    department: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyDetails({ ...facultyDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Faculty Details:', facultyDetails);
    // Add logic to send data to the backend API
    setFacultyDetails({ id: '', name: '', department: '', email: '' });
    setIsOpen(false);
  };

  return (
    <div className="p-6 bg-gray-300 rounded-lg min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Faculty Management</h1>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            Add New Faculty
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Faculty</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="id" className="block text-sm font-medium text-gray-600 mb-2">
                    Faculty ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={facultyDetails.id}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={facultyDetails.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="department" className="block text-sm font-medium text-gray-600 mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={facultyDetails.department}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={facultyDetails.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none"
                  >
                    Add Faculty
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNewFaculty;
