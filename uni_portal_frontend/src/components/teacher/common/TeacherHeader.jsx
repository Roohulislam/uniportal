import React from 'react';
import { FaSearch, FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';

const TeacherHeader = ({ user }) => {
    return (
        <header className="bg-gradient-to-r from-slate-800 via-purple-800 to-indigo-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                            Teacher Portal
                        </h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-300" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Notifications */}
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <FaBell className="text-xl" />
                        </button>

                        {/* User Menu */}
                        <div className="relative">
                            <button className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <FaUser className="text-xl" />
                                <span>{user?.name || 'Teacher'}</span>
                            </button>
                        </div>

                        {/* Logout */}
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-red-300">
                            <FaSignOutAlt className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TeacherHeader;