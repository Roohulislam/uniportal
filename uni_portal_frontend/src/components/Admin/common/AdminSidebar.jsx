import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUserTie,
  FaBook,
  FaDollarSign,
  FaClipboardList,
  FaCogs,
  FaWallet,
  FaClipboardCheck,
  FaGraduationCap,
  FaMoneyBill,
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaComment,
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

const Sidebar = () => {
  const location = useLocation();
  const [dropdowns, setDropdowns] = useState({
    courses: false,
    settings: false,
    fees: false,
    examination: false,
    academic: false,
    communication: false,
    finance: false,
    reports: false,
    dashboard: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 
                    text-white w-72 min-h-screen backdrop-blur-lg shadow-xl 
                    border-r border-white/10"
    >
      <div className="px-3 py-6 space-y-4">
        <nav>
          <ul className="space-y-1.5 ">
            <MenuItem
              icon={FaTachometerAlt}
              isActive={isActive("dasboard")}
              onClick={() => toggleDropdown("dashboard")}
              isDropdown
              isOpen={dropdowns.dashboard}
            >
              DashBoard
            </MenuItem>
            {dropdowns.dashboard && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="DashBoard">DashBoard</SubMenuItem>
                <SubMenuItem to="DashBoard/OverView">Overview</SubMenuItem>
                <SubMenuItem to="DashBoard/KeyMetrics">Key Metrics</SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaGraduationCap}
              onClick={() => toggleDropdown("students")}
              isDropdown
              isOpen={dropdowns.students}
            >
              Students
            </MenuItem>
            {dropdowns.students && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Students/ViewAllStudents">
                  View All Students
                </SubMenuItem>
                <SubMenuItem to="/Students/AddNewStudent">
                  Add New Student
                </SubMenuItem>
                <SubMenuItem to="/Students/EnrollmentStatus">
                  Enrollment Status
                </SubMenuItem>
                <SubMenuItem to="/Students/PerformanceReport">
                  Performance Reports
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaChalkboardTeacher}
              onClick={() => toggleDropdown("faculty")}
              isDropdown
              isOpen={dropdowns.faculty}
            >
              Faculty
            </MenuItem>
            {dropdowns.faculty && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Faculty/ViewAllFaculty">
                  View All Faculty
                </SubMenuItem>
                <SubMenuItem to="/Faculty/AddNewFaculty">
                  Add New Faculty
                </SubMenuItem>
                <SubMenuItem to="/Faculty/AssignCourses">
                  Assign Courses
                </SubMenuItem>
                <SubMenuItem to="/Faculty/FacultyPerformance">
                  Faculty Performance
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaBook}
              onClick={() => toggleDropdown("courses")} // Use the correct key
              isDropdown
              isOpen={dropdowns.courses} // Check the correct key
            >
              Courses
            </MenuItem>
            {dropdowns.courses && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Courses/ManageCourses">
                  Manage Courses
                </SubMenuItem>
                <SubMenuItem to="/Courses/AddnewCourse">
                  Add New Course
                </SubMenuItem>
                <SubMenuItem to="/Courses/CourseSchedule">
                  Course Schedules
                </SubMenuItem>
                <SubMenuItem to="/Courses/EnrollmentRequests">
                  Enrollment Requests
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaClipboardList}
              onClick={() => toggleDropdown("examination")}
              isActive={isActive("examination")}
              isDropdown
              isOpen={dropdowns.examination}
            >
              Examination
            </MenuItem>
            {dropdowns.examination && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Examination/ManageExams">
                  Manage Exams
                </SubMenuItem>
                <SubMenuItem to="/Examination/UploadResult">
                  Upload Results
                </SubMenuItem>
                <SubMenuItem to="/Examination/ResultAnalytic">
                  View Results Analytics
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaUserTie}
              onClick={() => toggleDropdown("staff")}
              isDropdown
              isOpen={dropdowns.staff}
            >
              Staff
            </MenuItem>
            {dropdowns.staff && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Staff/StaffManagement">
                  Add/Edit Staff
                </SubMenuItem>
                <SubMenuItem to="/Staff/StaffProfile">
                  View Staff Profiles
                </SubMenuItem>
                <SubMenuItem to="/Staff/StaffRollAndPermission">
                  Roles & Permissions
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaUserTie}
              onClick={() => toggleDropdown("academic")}
              isActive={isActive("academic")}
              isDropdown
              isOpen={dropdowns.academic}
            >
              Academic Management
            </MenuItem>
            {dropdowns.academic && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Academic/GradingPolicies">
                  Grading Policies
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaComment}
              onClick={() => toggleDropdown("communication")}
              isActive={isActive("communication")}
              isDropdown
              isOpen={dropdowns.communication}
            >
              Communication
            </MenuItem>
            {dropdowns.communication && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Communication/Announcements">
                  Announcements
                </SubMenuItem>
                <SubMenuItem to="/Communication/MessagingSystem">
                  Messaging System
                </SubMenuItem>
                <SubMenuItem to="/Communication/Notifications">
                  Notifications
                </SubMenuItem>
                <SubMenuItem to="/Communication/EventCalender">
                  Event Calendar
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaMoneyBill}
              onClick={() => toggleDropdown("finance")}
              isActive={isActive("finance")}
              isDropdown
              isOpen={dropdowns.finance}
            >
              Finance
            </MenuItem>
            {dropdowns.finance && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Finance/FinancialOverview">
                  Financial Overview
                </SubMenuItem>
                <SubMenuItem to="/Finance/MRevenueStreams">
                  MRevenue Streams
                </SubMenuItem>
                <SubMenuItem to="/Finance/Expenditures">
                  Expenditures
                </SubMenuItem>
                <SubMenuItem to="/Finance/BudgetAllocation">
                  Budget Allocation
                </SubMenuItem>
                <SubMenuItem to="/Finance/DonationsAndGrants">
                  Donations & Grants
                </SubMenuItem>
              </ul>
            )}

            <MenuItem
              icon={FaWallet}
              onClick={() => toggleDropdown("reports")}
              isActive={isActive("reports")}
              isDropdown
              isOpen={dropdowns.reports}
            >
              Reports
            </MenuItem>
            {dropdowns.reports && (
              <ul
                className="mt-2 ml-4 pl-4 border-l border-purple-500/30 space-y-1
                           animate-fadeIn"
              >
                <SubMenuItem to="/Reports/AcademicPerformanceReports">
                  Academic Performance Reports
                </SubMenuItem>
                <SubMenuItem to="/Reports/FinancialReports">
                  Financial Reports
                </SubMenuItem>
                <SubMenuItem to="/Reports/FacultyEvaluationReports">
                  Faculty Evaluation Reports
                </SubMenuItem>
                <SubMenuItem to="/Reports/ResearchFundingReports">
                  Research Funding and Reports
                </SubMenuItem>
              </ul>
            )}
          </ul>
        </nav>
      </div>

      {/* Settings Section - Move above */}
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
                <SubMenuItem to="/Settings/PortalSettings">
                  Portal Settings
                </SubMenuItem>
                <SubMenuItem to="/Settings/RoleManagement">
                  Role Management
                </SubMenuItem>
                <SubMenuItem to="/Settings/PrivacySettings">
                  Privacy Settings
                </SubMenuItem>
              </ul>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
