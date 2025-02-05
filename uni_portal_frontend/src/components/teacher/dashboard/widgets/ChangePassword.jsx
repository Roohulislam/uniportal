import React, { useState } from "react";
import { FaLock, FaSave } from "react-icons/fa";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  // Validate password (minimum 6 characters, at least one number and one letter)
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    if (!validatePassword(newPassword)) {
      setMessage(
        "Password must be at least 6 characters long and contain both letters and numbers."
      );
      setIsPasswordValid(false);
      return;
    }

    // Simulate password change (can be integrated with backend logic)
    setMessage("Password changed successfully!");
    setIsPasswordValid(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>

      {/* Password Change Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="currentPassword"
            className="block text-sm font-semibold"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="newPassword" className="block text-sm font-semibold">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              !isPasswordValid ? "border-red-500" : ""
            }`}
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Error Message */}
        {message && (
          <div
            className={`text-sm mt-4 ${
              !isPasswordValid ? "text-red-400" : "text-green-400"
            }`}
          >
            {message}
          </div>
        )}

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md"
          >
            <FaSave className="inline-block mr-2" />
            Save New Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
