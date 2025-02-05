import Dashboard from "./components/student/dashboard/Dashboard";
import TeacherDashboard from "./components/teacher/dashboard/TeacherDashboard";

// Student Dashboard Widgets
import StudentInfo from "./components/student/dashboard/widgets/StudentInfo";
import Schedule from "./components/student/dashboard/widgets/Schedule";
import Attendance from "./components/student/dashboard/widgets/Attendance";
import Timetable from "./components/student/dashboard/widgets/Timetable";

// Course Related
import CourseSummary from "./components/student/dashboard/widgets/CourseSummary";
import ClassProceedings from "./components/student/dashboard/widgets/ClassProceedings";
import QuizAssignmentMarks from "./components/student/dashboard/widgets/QuizAssignmentMarks";
import McqsTestTable from "./components/student/dashboard/widgets/McqsTestTable";
import SubjectiveTestTable from "./components/student/dashboard/widgets/SubjectiveTestTable";
import CourseContent from "./components/student/dashboard/widgets/CourseContent";
import AssignmentSummary from "./components/student/dashboard/widgets/AssignmentSummary";
import PendingAssignments from "./components/student/dashboard/widgets/PendingAssignments";

// Fee Related
import Challan from "./components/student/dashboard/widgets/Challan";
import FeeHistory from "./components/student/dashboard/widgets/FeeHistory";
import FeeInstallment from "./components/student/dashboard/widgets/FeeInstallment";
import FeeInstallmentStatus from "./components/student/dashboard/widgets/FeeInstallmentStatus";

// Settings & Profile
import ProfileSettings from "./components/student/dashboard/widgets/ProfileSettings";
import ChangePassword from "./components/student/dashboard/widgets/ChangePassword";
import LoginHistory from "./components/student/dashboard/widgets/LoginHistory";

// Other Components
import LibraryComponent from "./components/student/dashboard/widgets/LibraryComponent";
import AddSibling from "./components/student/dashboard/widgets/AddSiblingInfo";
import ScholarshipStatus from "./components/student/dashboard/widgets/ScholarshipStatus";
import AdminDashboard from "./components/Admin/dashboard/AdminDashboard";

const routes = [
  // Main Dashboards
  { path: "/student", element: <Dashboard />, role: "student" },
  { path: "/teacher", element: <TeacherDashboard />, role: "teacher" },
   

  // Course Routes
  { path: "/student/courses/summary", element: <CourseSummary /> },
  { path: "/student/courses/proceedings", element: <ClassProceedings /> },
  { path: "/student/courses/quiz-marks", element: <QuizAssignmentMarks /> },
  { path: "/student/courses/mcq-test", element: <McqsTestTable /> },
  { path: "/student/courses/subjective-test", element: <SubjectiveTestTable /> },
  { path: "/student/courses/content", element: <CourseContent /> },
  { path: "/student/courses/assignments", element: <AssignmentSummary /> },
  { path: "/student/courses/pending-assignments", element: <PendingAssignments /> },

  // Fee Routes
  { path: "/student/fee/challan", element: <Challan /> },
  { path: "/student/fee/history", element: <FeeHistory /> },
  { path: "/student/fee/installment", element: <FeeInstallment /> },
  { path: "/student/fee/status", element: <FeeInstallmentStatus /> },

  // Settings Routes
  { path: "/student/settings/profile", element: <ProfileSettings /> },
  { path: "/student/settings/password", element: <ChangePassword /> },
  { path: "/student/settings/login-history", element: <LoginHistory /> },

  // Other Routes
  { path: "/student/library", element: <LibraryComponent /> },
  { path: "/student/info/sibling", element: <AddSibling /> },
  { path: "/student/scholarship", element: <ScholarshipStatus /> },
  { path: "/student/timetable", element: <Timetable /> },
  { path: "/student/attendance", element: <Attendance /> }
];

export default routes;