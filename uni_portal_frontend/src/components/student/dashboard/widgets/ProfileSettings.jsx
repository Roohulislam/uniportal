import React, { useState } from 'react';

const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        email: 'student@example.com',
        phone: '+92-300-1234567',
        address: 'Islamabad, Pakistan',
        notifications: true
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update
    };

    return (
        <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Profile Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Phone</label>
                    <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Address</label>
                    <textarea
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={profile.notifications}
                        onChange={(e) => setProfile({ ...profile, notifications: e.target.checked })}
                        className="form-checkbox text-purple-500"
                    />
                    <label className="text-sm">Receive email notifications</label>
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;
