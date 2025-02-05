import React from "react";

const Profile = () => {
  const student = {
    name: "Zainab Iqbal",
    rollNo: "CIIT/SP22-BCS-044/ATD",
    fatherName: "Asif Iqbal",
    registeredCourses: 5,
    totalRegisteredCourses: 32,
    program: "BCS",
    currentSection: "A",
    currentAdvisor: "Muhammad Rafay Hannan",
    dateOfBirth: "Jan 20, 2002",
    cnic: "13503-6525555-2",
    thesisTitle: "NA",
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24"></div>

      {/* Profile Picture */}
      <div className="flex items-center justify-center -mt-12">
        <img
          className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
          src="https://via.placeholder.com/150"
          alt={student.name}
        />
      </div>

      {/* Main Details */}
      <div className="text-center px-4 py-2">
        <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
        <p className="text-base text-gray-600 italic">{student.program}</p>
        <p className="text-base text-gray-600">Roll No: {student.rollNo}</p>
      </div>

      {/* Student Details */}
      <div className="bg-gray-50 px-8 py-4">
        <h3 className="text-gray-700 font-semibold text-lg mb-3">
          Student Info
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Father's Name:</span>{" "}
            {student.fatherName}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Current Section:</span>{" "}
            {student.currentSection}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Current Advisor:</span>{" "}
            {student.currentAdvisor}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">
              Registered Courses:
            </span>{" "}
            {student.registeredCourses} / {student.totalRegisteredCourses}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Date of Birth:</span>{" "}
            {student.dateOfBirth}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">CNIC:</span>{" "}
            {student.cnic}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Thesis Title:</span>{" "}
            {student.thesisTitle}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
        <button className="w-full bg-white text-indigo-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition">
          Contact Advisor
        </button>
      </div>
    </div>
  );
};

export default Profile;
