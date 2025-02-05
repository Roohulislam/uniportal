import React, { useState } from "react";
import { FaSave, FaUpload, FaEdit } from "react-icons/fa";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("password123");
  const [profilePic, setProfilePic] = useState(null);
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePic(URL.createObjectURL(file));
    }
  };

  // Handle saving profile information
  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Simulate saving the profile information
    alert("Profile saved successfully!");
    setEditMode(false);
  };

  // Handle toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      {/* Profile Information */}
      <form onSubmit={handleSaveProfile} className="space-y-6">
        <div className="flex justify-center">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={newProfilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover mb-4"
            />
            <label
              htmlFor="profilePic"
              className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full cursor-pointer"
            >
              <FaUpload />
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!editMode}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!editMode}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!editMode}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Save or Edit Button */}
        <div className="flex justify-between items-center mt-6">
          {editMode ? (
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md"
            >
              <FaSave className="inline-block mr-2" />
              Save Profile
            </button>
          ) : (
            <button
              type="button"
              onClick={toggleEditMode}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
            >
              <FaEdit className="inline-block mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;
