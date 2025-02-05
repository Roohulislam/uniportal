import Dashboard from "../components/student/dashboard/Dashboard";

import CourseSummary from "../components/student/dashboard/widgets/CourseSummary";
import ClassProceedings from "../components/student/dashboard/widgets/ClassProceedings";
import QuizAssignmentMarks from "../components/student/dashboard/widgets/QuizAssignmentMarks";
import McqsTestTable from "../components/student/dashboard/widgets/McqsTestTable";
import SubjectiveTestTable from "../components/student/dashboard/widgets/SubjectiveTestTable";
import CourseContent from "../components/student/dashboard/widgets/CourseContent";
import AssignmentSummary from "../components/student/dashboard/widgets/AssignmentSummary";
import PendingAssignments from "../components/student/dashboard/widgets/PendingAssignments";

import Challan from "../components/student/dashboard/widgets/Challan";
import FeeHistory from "../components/student/dashboard/widgets/FeeHistory";
import FeeInstallment from "../components/student/dashboard/widgets/FeeInstallment";
import FeeInstallmentStatus from "../components/student/dashboard/widgets/FeeInstallmentStatus";

import ProfileSettings from "../components/student/dashboard/widgets/ProfileSettings";
import Change_Password from "../components/student/dashboard/widgets/ChangePassword";
import LoginHistory from "../components/student/dashboard/widgets/LoginHistory";

import LibraryComponent from "../components/student/dashboard/widgets/LibraryComponent";
import AddSibling from "../components/student/dashboard/widgets/AddSiblingInfo";
import ScholarshipStatus from "../components/student/dashboard/widgets/ScholarshipStatus";

import WeeklyTimetable from "../components/student/pages/TimeTable";
import Student_Result from "../components/student/pages/Result";

import Boarding from "../components/student/dashboard/widgets/Boarding";
import Hostel from "../components/student/dashboard/widgets/Hostel";
import OBE from "../components/student/dashboard/widgets/OBE";
import UniversityClearance from "../components/student/dashboard/widgets/UniversityClearance";
import ApplicationProcessing from "../components/student/dashboard/widgets/ApplicationProcessing";
  
  export const studentRoutes = [
    { path: "/", element: <Dashboard /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/courses/CourseSummary", element: <CourseSummary /> },
    { path: "/courses/class-proceedings", element: <ClassProceedings /> },
    { path: "/courses/quiz-marks", element: <QuizAssignmentMarks /> },
    { path: "/course-portal/mcq-test", element: <McqsTestTable /> },
    { path: "/course-portal/subjective-test", element: <SubjectiveTestTable /> },
    { path: "/course-portal/course-content", element: <CourseContent /> },
    { path: "/course-portal/assignments-summary", element: <AssignmentSummary /> },
    { path: "/course-portal/pending-assignments", element: <PendingAssignments /> },
    { path: "/fee/challan", element: <Challan /> },
    { path: "/fee/history", element: <FeeHistory /> },
    { path: "/fee/installment", element: <FeeInstallment /> },
    { path: "/fee/installment-status", element: <FeeInstallmentStatus /> },
    { path: "/settings/profile", element: <ProfileSettings /> },
    { path: "/settings/change-password", element: <Change_Password /> },
    { path: "/settings/login-history", element: <LoginHistory /> },
    { path: "/library", element: <LibraryComponent /> },
    { path: "/scholarship-status", element: <ScholarshipStatus /> },
    { path: "/timetable", element: <WeeklyTimetable /> },
    { path: "/result", element: <Student_Result /> },
    { path: "/sibling-info/add-sibling-info", element: <AddSibling /> },
    { path: "/boarding", element: <Boarding /> },
    { path: "/hostel", element: <Hostel /> },
    { path: "/obe", element: <OBE /> },
    { path: "/university-clearance", element: <UniversityClearance /> },
    { path: "/application-processing", element: <ApplicationProcessing /> },
  ];
  