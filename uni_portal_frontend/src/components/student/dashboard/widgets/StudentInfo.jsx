import React from "react";
import stdpic from "../../../../assets/Student.png";
import {
  FaUser,
  FaIdCard,
  FaUserTie,
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaUserCog,
  FaBirthdayCake,
  FaPassport,
  FaScroll,
} from "react-icons/fa";

const StudentInfo = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-indigo-50 rounded-2xl shadow-lg max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Profile</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Picture Section */}
        <div className="lg:w-1/4 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-0 transition duration-300 blur"></div>
            <div className="relative">
              <img
                src={stdpic}
                alt="Profile"
                className="w-40 lg:w-48 rounded-full border-4 border-indigo-400 shadow-xl transform transition duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Profile Information Section */}
        <div className="lg:w-3/4 bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Personal Information
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoItem icon={<FaUser />} label="Name" value="Zainab Iqbal" />
            <InfoItem
              icon={<FaIdCard />}
              label="Roll No"
              value="CIIT/SP22-BCS-044/ATD"
            />
            <InfoItem
              icon={<FaUserTie />}
              label="Father Name"
              value="Asif Iqbal"
            />
            <InfoItem icon={<FaBook />} label="Registered Courses" value="5" />
            <InfoItem
              icon={<FaBook />}
              label="Total Registered Courses"
              value="32"
            />
            <InfoItem icon={<FaGraduationCap />} label="Program" value="BCS" />
            <InfoItem icon={<FaUsers />} label="Current Section" value="A" />
            <InfoItem
              icon={<FaUserCog />}
              label="Current Advisor"
              value="Muhammad Rafay Hannan"
            />
            <InfoItem
              icon={<FaBirthdayCake />}
              label="Date of Birth"
              value="Jan 20, 2002"
            />
            <InfoItem
              icon={<FaPassport />}
              label="CNIC"
              value="13503-6525555-2"
            />
            <InfoItem icon={<FaScroll />} label="Thesis Title" value="NA" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start">
      <div className="text-indigo-600 text-2xl mr-4">{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-500">{label}</p>
        <p className="text-lg text-gray-800 font-medium">{value}</p>
      </div>
    </div>
  </div>
);

export default StudentInfo;
