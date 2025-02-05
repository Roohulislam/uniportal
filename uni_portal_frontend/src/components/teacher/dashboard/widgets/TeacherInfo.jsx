import React from 'react';
import teacherPic from '../../../../assets/Teacher.png';
import { FaUser, FaIdCard, FaUserTie, FaBook, FaGraduationCap, FaUsers, FaUserCog, FaBirthdayCake, FaPassport, FaScroll } from 'react-icons/fa';

const TeacherInfo = () => {
    return (
        <div className="p-6 bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Picture Section */}
                <div className="md:w-1/4">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-50 group-hover:opacity-100 transition duration-300 blur"></div>
                        <div className="relative">
                            <img
                                src={teacherPic}
                                alt="Profile"
                                className="w-full rounded-full border-4 border-white shadow-xl transform transition duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Profile Information */}
                <div className="md:w-3/4 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-4">
                        <InfoItem icon={<FaUser />} label="Name" value="John Doe" />
                        <InfoItem icon={<FaIdCard />} label="Employee ID" value="TCH-12345" />
                        <InfoItem icon={<FaUserTie />} label="Department" value="Computer Science" />
                        <InfoItem icon={<FaBook />} label="Courses Taught" value="5" />
                        <InfoItem icon={<FaGraduationCap />} label="Highest Qualification" value="PhD in Computer Science" />
                        <InfoItem icon={<FaUsers />} label="Years of Experience" value="10" />
                        <InfoItem icon={<FaUserCog />} label="Current Advisor" value="Yes" />
                        <InfoItem icon={<FaBirthdayCake />} label="Date of Birth" value="Jan 15, 1980" />
                        <InfoItem icon={<FaPassport />} label="CNIC" value="12345-6789012-3" />
                        <InfoItem icon={<FaScroll />} label="Research Interests" value="Artificial Intelligence, Machine Learning" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
        <div className="text-purple-600 mr-3">{icon}</div>
        <div className="flex-1">
            <span className="text-sm font-medium text-gray-500">{label}:</span>
            <span className="ml-2 text-gray-900">{value}</span>
        </div>
    </div>
);

export default TeacherInfo;