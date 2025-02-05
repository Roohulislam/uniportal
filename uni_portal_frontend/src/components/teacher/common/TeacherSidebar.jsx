import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaCalendarAlt,
  FaClipboardList,
  FaCogs,
  FaClipboardCheck,
  FaGraduationCap,
  FaFileAlt,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";

const MenuItem = ({
  to,
  icon: Icon,
  children,
  onClick,
  isDropdown,
  isOpen,
  isActive,
}) => (
  <li>
    {to ? (
      <Link
        to={to}
        className={`flex items-center px-4 py-2.5 rounded-lg transition-all duration-300
                   ${
                     isActive
                       ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white shadow-lg"
                       : "hover:bg-white/10"
                   }`}
      >
        <Icon
          className={`w-5 h-5 mr-3 transition-transform duration-300
                       ${isActive ? "scale-110 text-purple-400" : ""}`}
        />
        <span className="font-medium">{children}</span>
      </Link>
    ) : (
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg
                 transition-all duration-300 hover:bg-white/10 group"
      >
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-3 group-hover:text-purple-400 transition-colors" />
          <span className="font-medium">{children}</span>
        </div>
        {isDropdown && (
          <span
            className={`transform transition-transform duration-300 
                          ${isOpen ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        )}
      </button>
    )}
  </li>
);

const SubMenuItem = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="block px-4 py-2 rounded-lg transition-all duration-300
                 text-gray-300 hover:bg-white/5 hover:text-purple-300"
    >
      {children}
    </Link>
  </li>
);

const TeacherSidebar = () => {
  const location = useLocation();
  const [dropdowns, setDropdowns] = useState({
    courses: false,
    attendance: false,
    grading: false,
    assignments: false,
    exams: false,
    settings: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 
                    text-white w-64 min-h-screen backdrop-blur-lg shadow-xl 
                    border-r border-white/10"
    >
      <div className="px-4 py-6 space-y-4">
        <nav>
          <ul className="space-y-1.5">
            <MenuItem
              to="/teacher"
              icon={FaHome}
              isActive={isActive("/teacher")}
            >
              Dashboard
            </MenuItem>

            <MenuItem
              icon={FaBook}
              onClick={() => toggleDropdown("courses")}
              isDropdown
              isOpen={dropdowns.courses}
            >
              <Link to={"/teacher/courses"}> Courses</Link>
            </MenuItem>
            {dropdowns.courses && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1">
                <SubMenuItem to="/teacher/courses/mycourses">
                  My Courses
                </SubMenuItem>
                <SubMenuItem to="/teacher/courses/materials">
                  Course Materials
                </SubMenuItem>
                <SubMenuItem to="/teacher/courses/schedule">
                  Course Schedule
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaUsers}
              onClick={() => toggleDropdown("attendance")}
              isDropdown
              isOpen={dropdowns.attendance}
            >
              Attendance
            </MenuItem>
            {dropdowns.attendance && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1">
                <SubMenuItem to="/teacher/attendance/mark">
                  Mark Attendance
                </SubMenuItem>
                <SubMenuItem to="/teacher/attendance/viewrecords">
                  View Records
                </SubMenuItem>
                <SubMenuItem to="/teacher/attendance/reports">
                  Reports
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaClipboardList}
              onClick={() => toggleDropdown("grading")}
              isDropdown
              isOpen={dropdowns.grading}
            >
              Grading
            </MenuItem>
            {dropdowns.grading && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1">
                <SubMenuItem to="/teacher/grading/assignments">
                  Grade Assignments
                </SubMenuItem>
                <SubMenuItem to="/teacher/grading/quizzes">
                  Grade Quizzes
                </SubMenuItem>
                <SubMenuItem to="/teacher/grading/exams">
                  Grade Exams
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaFileAlt}
              onClick={() => toggleDropdown("assignments")}
              isDropdown
              isOpen={dropdowns.assignments}
            >
              Assignments
            </MenuItem>
            {dropdowns.assignments && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1">
                <SubMenuItem to="/teacher/assignments/create">
                  Create Assignment
                </SubMenuItem>
                <SubMenuItem to="/teacher/assignments/manage">
                  Manage Assignments
                </SubMenuItem>
                <SubMenuItem to="/teacher/assignments/submissions">
                  View Submissions
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaClipboardCheck}
              onClick={() => toggleDropdown("exams")}
              isDropdown
              isOpen={dropdowns.exams}
            >
              Exams
            </MenuItem>
            {dropdowns.exams && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1">
                <SubMenuItem to="/teacher/exams/create">
                  Create Exam
                </SubMenuItem>
                <SubMenuItem to="/teacher/exams/manage">
                  Manage Exams
                </SubMenuItem>
                <SubMenuItem to="/teacher/exams/results">Results</SubMenuItem>
              </ul>
            )}

            <MenuItem
              to="/teacher/timetable"
              icon={FaCalendarAlt}
              isActive={isActive("/teacher/timetable")}
            >
              Timetable
            </MenuItem>
          </ul>
        </nav>
      </div>

      <div className="px-4 py-6 space-y-4">
        <nav>
          <ul className="space-y-1.5">
            <MenuItem
              icon={FaCogs}
              onClick={() => toggleDropdown("settings")}
              isDropdown
              isOpen={dropdowns.settings}
            >
              Settings
            </MenuItem>
            {dropdowns.settings && (
              <ul className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1">
                <SubMenuItem to="/teacher/settings/profile">
                  Profile
                </SubMenuItem>
                <SubMenuItem to="/teacher/settings/password">
                  Change Password
                </SubMenuItem>
                <SubMenuItem to="/teacher/settings/preferences">
                  Preferences
                </SubMenuItem>
              </ul>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default TeacherSidebar;
