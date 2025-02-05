import React, { useState } from 'react';

const PortalSettings = () => {
  const [userType, setUserType] = useState('teacher'); // Default user type is 'teacher'
  const [userId, setUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handler for user type selection
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  // Handler for password reset form submission
  const handlePasswordReset = (event) => {
    event.preventDefault();

    // Validation
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    if (!userId || !newPassword) {
      setMessage('Please provide both user ID and a new password.');
      return;
    }

    // Simulate password reset (this could be an API call to your backend)
    setMessage(`Password reset successfully for ${userType} with ID: ${userId}`);
    
    // Clear input fields
    setUserId('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-300 rounded-lg py-12">
      {/* Outer Parent Div with Shadow and Padding for Beauty */}
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Portal Settings</h2>

        {/* Password Reset Form */}
        <form onSubmit={handlePasswordReset} className="space-y-6">
          {/* User Type Selection */}
          <div className="flex items-center justify-between">
            <label className="text-lg font-medium text-gray-700 mr-4">Select User Type</label>
            <select
              value={userType}
              onChange={handleUserTypeChange}
              className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* User ID Input */}
          <div className="flex items-center justify-between">
            <label htmlFor="userId" className="text-lg font-medium text-gray-700 mr-4">User ID / Email</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter User ID or Email"
            />
          </div>

          {/* New Password Input */}
          <div className="flex items-center justify-between">
            <label htmlFor="newPassword" className="text-lg font-medium text-gray-700 mr-4">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter New Password"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex items-center justify-between">
            <label htmlFor="confirmPassword" className="text-lg font-medium text-gray-700 mr-4">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Confirm New Password"
            />
          </div>

          {/* Error or Success Message */}
          {message && (
            <div className={`mt-4 text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </div>
          )}

          {/* Submit Button */}
          <div className="text-right mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortalSettings;
