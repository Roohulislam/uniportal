import React, { useState } from "react";
import { FaSave, FaRegBell, FaRegLightbulb, FaLanguage } from "react-icons/fa";

const Preferences = () => {
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");
  const [notifications, setNotifications] = useState(true);
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating the process of saving preferences
    const preferencesData = {
      language,
      theme,
      notifications,
    };

    console.log("Preferences Updated:", preferencesData);
    setMessage("Preferences updated successfully!");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Preferences</h2>

      {/* Preferences Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Language Preference */}
        <div>
          <label htmlFor="language" className="block text-sm font-semibold">
            <FaLanguage className="inline-block mr-2" />
            Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>

        {/* Theme Preference */}
        <div>
          <label htmlFor="theme" className="block text-sm font-semibold">
            <FaRegLightbulb className="inline-block mr-2" />
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        {/* Notification Preference */}
        <div>
          <label
            htmlFor="notifications"
            className="block text-sm font-semibold"
          >
            <FaRegBell className="inline-block mr-2" />
            Notifications
          </label>
          <div className="flex items-center gap-4">
            <label htmlFor="notifications" className="text-sm">
              Enable Notifications
            </label>
            <input
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div className="text-sm text-green-400 mt-4">{message}</div>
        )}

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md"
          >
            <FaSave className="inline-block mr-2" />
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default Preferences;
