import ViewAllStudents from "../components/Admin/dashboard/Widgets/ViewAllStudents";
import EnrollmentStatus from "../components/Admin/dashboard/Widgets/Enrollment Status";
import AddNewStudent from "../components/Admin/dashboard/Widgets/AddNewStudent";
import Dashboard from "../components/Admin/dashboard/AdminDashboard";
import PerformanceReport from "../components/Admin/dashboard/Widgets/PerformanceReport";
import ViewAllFaculty from "../components/Admin/dashboard/Widgets/ViewAllFaculty";
import AddNewFaculty from "../components/Admin/dashboard/Widgets/AddNewFaculty";
import AssignCourses from "../components/Admin/dashboard/Widgets/AssignCourses";
import FacultyPerformance from "../components/Admin/dashboard/Widgets/FacultyPerformace";
import ManageCourses from "../components/Admin/dashboard/Widgets/ManageCourses";
import AddNewCourse from "../components/Admin/dashboard/Widgets/AddNewCourse";
import CourseSchedule from "../components/Admin/dashboard/Widgets/CourseSchedule";
import EnrollmentRequests from "../components/Admin/dashboard/Widgets/EnrollmentRequests";
import ManageExams from "../components/Admin/dashboard/Widgets/ManageExams";
import UploadResult from "../components/Admin/dashboard/Widgets/UploadResult";
import ResultAnalytics from "../components/Admin/dashboard/Widgets/ResultAnalytics";
import StaffManagement from "../components/Admin/dashboard/Widgets/StaffManagement";
import StaffProfile from "../components/Admin/dashboard/Widgets/StaffPorfile";
import StaffRolePermission from "../components/Admin/dashboard/Widgets/StaffRollAndPermission";
import Announcements from "../components/Admin/dashboard/Widgets/Announcements";
import MessagingSystem from "../components/Admin/dashboard/Widgets/MessagingSystem";
import Notification from "../components/Admin/dashboard/Widgets/Notifications";
import EventCalendar from "../components/Admin/dashboard/Widgets/EventCalender";
import FinancialOverview from "../components/Admin/dashboard/Widgets/FinancialOverview";
import MRevenueStreams from "../components/Admin/dashboard/Widgets/MRevenueStreams";
import Expenditures from "../components/Admin/dashboard/Widgets/Expenditures";
import BudgetAllocation from "../components/Admin/dashboard/Widgets/BudgetAllocation";
import DonationsAndGrants from "../components/Admin/dashboard/Widgets/DonationsAndGrants";
import UniversityOverview from "../components/Admin/dashboard/Widgets/UniversityOverview";
import KeyMetrics from "../components/Admin/dashboard/Widgets/KeyMetrics";
import AcademicPerformanceReports from "../components/Admin/dashboard/Widgets/AcadamicPerformanceReports";
import FinancialReports from "../components/Admin/dashboard/Widgets/FinancialReports";
import FacultyEvaluationReports from "../components/Admin/dashboard/Widgets/FacultyEvaluationReports";
import ResearchFundingReports from "../components/Admin/dashboard/Widgets/ResearchFundingReports";
import GradingPolicies from "../components/Admin/dashboard/Widgets/GradingPolicies";
import PendingTasks from "../components/Admin/dashboard/Widgets/PendingTasks";
import PortalSettings from "../components/Admin/dashboard/Widgets/PortalSetting";
import PrivacySettings from "../components/Admin/dashboard/Widgets/PrivacySettings";
import RoleManagement from "../components/Admin/dashboard/Widgets/RoleManagement";



export const adminRoutes = [
    { path: "/", element: <Dashboard /> },
    { path: "DashBoard", element: <Dashboard /> },
    { path: "DashBoard/OverView", element: <UniversityOverview /> },
    { path: "DashBoard/KeyMetrics", element: <KeyMetrics /> },
   
    { path: "/Students/ViewAllStudents", element: <ViewAllStudents /> },
    { path: "/Students/AddNewStudent", element: <AddNewStudent /> },
    { path: "/Students/EnrollmentStatus", element: <EnrollmentStatus /> },
    { path: "/Students/PerformanceReport", element:  <PerformanceReport/>},
    { path: "/Faculty/ViewAllFaculty", element:  <ViewAllFaculty/>},
    { path: "/Faculty/AddNewFaculty", element:  <AddNewFaculty/>},
    { path: "/Faculty/AssignCourses", element:  <AssignCourses/>},
    { path: "/Faculty/FacultyPerformance", element:  <FacultyPerformance/>},
    { path: "/Courses/ManageCourses", element:  <ManageCourses/>},
    { path: "/Courses/AddnewCourse", element:  <AddNewCourse/>},
    { path: "/Courses/CourseSchedule", element:  <CourseSchedule/>},
    { path: "/Courses/EnrollmentRequests", element:  <EnrollmentRequests/>},
    { path: "/Examination/ManageExams", element:  <ManageExams/>},
    { path: "/Examination/UploadResult", element:  <UploadResult/>},
    { path: "/Examination/ResultAnalytic", element:  <ResultAnalytics/>},
    { path: "/Staff/StaffManagement", element:  <StaffManagement/>},
    { path: "/Staff/StaffProfile", element:  <StaffProfile/>},
    { path: "/Staff/StaffRollAndPermission", element:  <StaffRolePermission/>},
    { path: "/Communication/Announcements", element:  <Announcements/>},
    { path: "/Communication/MessagingSystem", element:  <MessagingSystem/>},
    { path: "/Communication/Notifications", element:  <Notification/>},
    { path: "/Communication/EventCalender", element:  <EventCalendar/>},
    { path: "/Finance/FinancialOverview", element:  <FinancialOverview/>},
    { path: "/Finance/MRevenueStreams", element:  <MRevenueStreams/>},
    { path: "/Finance/Expenditures", element:  <Expenditures/>},
    { path: "/Finance/BudgetAllocation", element:  <BudgetAllocation/>},
    { path: "/Finance/DonationsAndGrants", element:  <DonationsAndGrants/>},
    { path: "/Reports/AcademicPerformanceReports", element:  <AcademicPerformanceReports/>},
    { path: "/Reports/FinancialReports", element:  <FinancialReports/>},
    { path: "/Reports/FacultyEvaluationReports", element:  <FacultyEvaluationReports/>},
    { path: "/Reports/ResearchFundingReports", element:  <ResearchFundingReports/>},
    { path: "/Academic/GradingPolicies", element:  <GradingPolicies/>},
    { path: "/Settings/PortalSettings", element:  <PortalSettings/>},
    { path: "/Settings/PrivacySettings", element:  <PrivacySettings/>},
    { path: "/Settings/RoleManagement", element:  <RoleManagement/>},
   
    
]