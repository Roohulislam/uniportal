import React, { useState } from 'react';

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    position: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add new staff or update existing one
  const handleAddOrEdit = () => {
    if (isEditing) {
      setStaff((prevStaff) =>
        prevStaff.map((item) =>
          item.id === formData.id ? { ...item, ...formData } : item
        )
      );
    } else {
      setStaff((prevStaff) => [
        ...prevStaff,
        { id: Date.now(), ...formData },
      ]);
    }
    setShowModal(false);
    setFormData({
      id: '',
      name: '',
      position: '',
      email: '',
      phone: '',
    });
    setIsEditing(false);
  };

  // Open modal for adding new staff
  const openModal = () => {
    setShowModal(true);
  };

  // Open modal for editing staff
  const openEditModal = (staffMember) => {
    setFormData(staffMember);
    setIsEditing(true);
    setShowModal(true);
  };

  // Delete staff member
  const handleDelete = (id) => {
    setStaff(staff.filter((staffMember) => staffMember.id !== id));
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-300 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4">Staff Management</h2>
      <button
        onClick={openModal}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add New Staff
      </button>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Position</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.length > 0 ? (
              staff.map((staffMember) => (
                <tr key={staffMember.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-2">{staffMember.name}</td>
                  <td className="border border-gray-300 p-2">{staffMember.position}</td>
                  <td className="border border-gray-300 p-2">{staffMember.email}</td>
                  <td className="border border-gray-300 p-2">{staffMember.phone}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => openEditModal(staffMember)}
                      className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(staffMember.id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No staff available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit Staff */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h3 className="text-lg font-semibold mb-4">
              {isEditing ? 'Edit Staff' : 'Add New Staff'}
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter staff name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter position"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </form>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {isEditing ? 'Update Staff' : 'Add Staff'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;
