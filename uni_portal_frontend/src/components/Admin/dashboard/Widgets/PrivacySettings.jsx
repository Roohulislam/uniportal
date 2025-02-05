import React, { useState } from 'react';

const PrivacySettings = () => {
  const [dataPrivacy, setDataPrivacy] = useState(true); // Control Data Privacy
  const [accessControl, setAccessControl] = useState(true); // Control Access to Data
  const [auditLogs, setAuditLogs] = useState(true); // Control Audit Logs

  // Handler to toggle data privacy settings
  const handleDataPrivacyChange = () => {
    setDataPrivacy(!dataPrivacy);
  };

  // Handler to toggle access control
  const handleAccessControlChange = () => {
    setAccessControl(!accessControl);
  };

  // Handler to toggle audit logs settings
  const handleAuditLogsChange = () => {
    setAuditLogs(!auditLogs);
  };

  return (
    <div className="min-h-screen bg-gray-300 rounded-lg py-12">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Privacy Settings</h2>

        <div className="space-y-8">
          {/* Data Privacy Settings */}
          <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <label htmlFor="dataPrivacy" className="text-xl font-medium text-gray-700">
              Enable Data Privacy
            </label>
            <input
              type="checkbox"
              id="dataPrivacy"
              checked={dataPrivacy}
              onChange={handleDataPrivacyChange}
              className="toggle-checkbox"
            />
          </div>
          <p className="text-sm text-gray-500">
            Enabling this will ensure user data privacy compliance (e.g., GDPR).
          </p>

          {/* Access Control */}
          <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <label htmlFor="accessControl" className="text-xl font-medium text-gray-700">
              Restrict Access to Sensitive Data
            </label>
            <input
              type="checkbox"
              id="accessControl"
              checked={accessControl}
              onChange={handleAccessControlChange}
              className="toggle-checkbox"
            />
          </div>
          <p className="text-sm text-gray-500">
            Restrict access to certain sensitive data based on user roles.
          </p>

          {/* Audit Logs */}
          <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <label htmlFor="auditLogs" className="text-xl font-medium text-gray-700">
              Enable Audit Logs
            </label>
            <input
              type="checkbox"
              id="auditLogs"
              checked={auditLogs}
              onChange={handleAuditLogsChange}
              className="toggle-checkbox"
            />
          </div>
          <p className="text-sm text-gray-500">
            Track all changes to privacy-related settings and user data access.
          </p>

          {/* Save Changes Button */}
          <div className="text-right mt-6">
            <button
              onClick={() => alert('Privacy settings updated successfully!')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
