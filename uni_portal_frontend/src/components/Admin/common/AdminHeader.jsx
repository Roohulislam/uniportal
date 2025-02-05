import React from 'react';
import { FaSearch, FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-slate-800 via-purple-800 to-indigo-800  text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                           Admin
                        </h1>
                    </div>

                    {/* Search Bar */}
                    {/* <div className="flex-1 max-w-md mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-white/10 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                            />
                            <FaSearch className="absolute right-3 top-2.5 text-white/70" />
                        </div>
                    </div> */}

                    {/* Right Side Items */}
                    <div className="flex items-center justify-end space-x-6 flex-shrink-0 ml-auto">
                        {/* Notifications */}
                        <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative">
                            <FaBell className="text-xl" />
                            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 transform translate-x-1/2 -translate-y-1/2"></span>
                        </button>

                        {/* Profile */}
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <div className="text-sm font-medium">Zainab Iqbal</div>
                                <div className="text-xs text-pink-200">CIIT/SP22-BCS-044/ATD</div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                    <FaUser className="text-xl" />
                                </button>
                                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                    <FaSignOutAlt className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;