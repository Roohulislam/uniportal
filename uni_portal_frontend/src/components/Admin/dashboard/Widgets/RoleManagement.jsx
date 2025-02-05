import React, { useState } from 'react';

const RoleManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'student' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'teacher' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'admin' },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [message, setMessage] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleUpdateRole = () => {
    if (!selectedUserId || !selectedRole) {
      setMessage('Please select a user and a role.');
      return;
    }

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId ? { ...user, role: selectedRole } : user
      )
    );

    setMessage(`Role for ${users.find((user) => user.id === selectedUserId).name} updated to ${selectedRole}.`);
    setSelectedRole('');
  };

  const handleRemoveUser = () => {
    if (!selectedUserId) {
      setMessage('Please select a user to remove.');
      return;
    }

    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserId));
    setMessage('User removed successfully.');
    setSelectedUserId(null);
    setSelectedRole('');
  };

  return (
    <div className="min-h-screen bg-gray-300 py-12">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Role Management</h2>

        {/* User and Role Selection */}
        <div className="space-y-6">
          {/* User Selection Dropdown */}
          <div className="flex items-center justify-between">
            <label htmlFor="user" className="text-lg font-medium text-gray-700 mr-4">Select User</label>
            <select
              id="user"
              onChange={(e) => setSelectedUserId(Number(e.target.value))}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select a User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
          </div>

          {/* Role Assignment Dropdown */}
          <div className="flex items-center justify-between">
            <label htmlFor="role" className="text-lg font-medium text-gray-700 mr-4">Assign Role</label>
            <select
              id="role"
              value={selectedRole}
              onChange={handleRoleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleUpdateRole}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Update Role
            </button>
            <button
              onClick={handleRemoveUser}
              className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Remove User
            </button>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mt-6 text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
          >
            {message}
          </div>
        )}

        {/* User List */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Users List</h3>
          <ul className="mt-4 space-y-4">
            {users.map((user) => (
              <li key={user.id} className="flex justify-between items-center border-b py-2">
                <span className="text-lg font-medium">{user.name} ({user.email})</span>
                <span className="text-gray-600">Role: {user.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoleManagement;
