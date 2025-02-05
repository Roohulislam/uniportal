import React, { useState } from 'react';

const StaffRolePermission = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [staffData, setStaffData] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Faculty',
      permissions: ['Can Edit Profile', 'Can View Dashboard'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Admin',
      permissions: ['Can Edit Profile', 'Can Assign Roles', 'Can View Dashboard'],
    },
    {
      id: 3,
      name: 'Robert Brown',
      role: 'Technician',
      permissions: ['Can View Dashboard'],
    },
  ]);

  const roles = ['Faculty', 'Admin', 'Technician', 'Support'];
  const allPermissions = [
    'Can Edit Profile',
    'Can Assign Roles',
    'Can View Dashboard',
    'Can Manage Users',
  ];

  // Filter staff by search query
  const filteredStaffData = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle role change
  const handleRoleChange = (id, newRole) => {
    setStaffData((prevData) =>
      prevData.map((staff) =>
        staff.id === id ? { ...staff, role: newRole } : staff
      )
    );
  };

  // Handle permission change
  const handlePermissionChange = (id, permission) => {
    setStaffData((prevData) =>
      prevData.map((staff) =>
        staff.id === id
          ? {
              ...staff,
              permissions: staff.permissions.includes(permission)
                ? staff.permissions.filter((perm) => perm !== permission)
                : [...staff.permissions, permission],
            }
          : staff
      )
    );
  };

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

        {/* Staff List with Role and Permissions */}
        {filteredStaffData.length > 0 ? (
          filteredStaffData.map((staff) => (
            <div
              key={staff.id}
              className="mt-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{staff.name}</h3>
                <select
                  value={staff.role}
                  onChange={(e) => handleRoleChange(staff.id, e.target.value)}
                  className="border p-2 rounded-lg"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800">Permissions</h4>
                <div className="space-y-2 mt-4">
                  {allPermissions.map((permission) => (
                    <div key={permission} className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        checked={staff.permissions.includes(permission)}
                        onChange={() => handlePermissionChange(staff.id, permission)}
                        className="h-4 w-4 border-gray-300"
                      />
                      <label className="text-sm text-gray-600">{permission}</label>
                    </div>
                  ))}
                </div>
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

export default StaffRolePermission;
