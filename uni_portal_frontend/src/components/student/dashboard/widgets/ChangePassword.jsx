import React, { useState } from 'react';

const ChangePassword = () => {
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password change
    };

    return (
        <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold">Current Password</label>
                    <input
                        type="password"
                        value={passwords.current}
                        onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">New Password</label>
                    <input
                        type="password"
                        value={passwords.new}
                        onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold">Confirm New Password</label>
                    <input
                        type="password"
                        value={passwords.confirm}
                        onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
                    >
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;
