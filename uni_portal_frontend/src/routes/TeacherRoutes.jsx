import TeacherDashboard from "../components/teacher/dashboard/TeacherDashboard";
import MyCourses from "../components/teacher/dashboard/widgets/MyCourses";
import CourseMaterials from "../components/teacher/dashboard/widgets/CourseMaterials";
import CourseSchedule from "../components/teacher/dashboard/widgets/CourseSchedule";
import MarkAttendance from "../components/teacher/dashboard/widgets/MarkAttendance";
import ViewRecords from "../components/teacher/dashboard/widgets/ViewRecords";
import Reports from "../components/teacher/dashboard/widgets/Reports";
import GradeAssignments from "../components/teacher/dashboard/widgets/GradeAssignments";
import GradeQuizzes from "../components/teacher/dashboard/widgets/GradeQuizzes";
import GradeExams from "../components/teacher/dashboard/widgets/GradeExams";
import CreateAssignments from "../components/teacher/dashboard/widgets/CreateAssignments";
import ManageAssignments from "../components/teacher/dashboard/widgets/ManageAssignments";
import ViewSubmission from "../components/teacher/dashboard/widgets/ViewSubmission";
import CreateExam from "../components/teacher/dashboard/widgets/CreateExam";
import ManageExams from "../components/teacher/dashboard/widgets/ManageExams";
import Result from "../components/teacher/dashboard/widgets/Results";
import Timetable from "../components/teacher/dashboard/widgets/Timetable";
import Profile from "../components/teacher/dashboard/widgets/Profile";
import ChangePassword from "../components/teacher/dashboard/widgets/ChangePassword";
import Preferences from "../components/teacher/dashboard/widgets/Preferences";
  
  export const teacherRoutes = [
    { path: "/", element: <TeacherDashboard /> },
    { path: "/teacher-dashboard", element: <TeacherDashboard /> },
    { path: "/teacher/courses/mycourses", element: <MyCourses /> },
    { path: "/teacher/courses/materials", element: <CourseMaterials /> },
    { path: "/teacher/courses/schedule", element: <CourseSchedule /> },
    { path: "/teacher/attendance/mark", element: <MarkAttendance /> },
    { path: "/teacher/attendance/viewrecords", element: <ViewRecords /> },
    { path: "/teacher/attendance/reports", element: <Reports /> },
    { path: "/teacher/grading/assignments", element: <GradeAssignments /> },
    { path: "/teacher/grading/quizzes", element: <GradeQuizzes /> },
    { path: "/teacher/grading/exams", element: <GradeExams /> },
    { path: "/teacher/assignments/create", element: <CreateAssignments /> },
    { path: "/teacher/assignments/manage", element: <ManageAssignments /> },
    { path: "/teacher/assignments/submissions", element: <ViewSubmission /> },
    { path: "/teacher/exams/create", element: <CreateExam /> },
    { path: "/teacher/exams/manage", element: <ManageExams /> },
    { path: "/teacher/exams/results", element: <Result /> },
    { path: "/teacher/timetable", element: <Timetable /> },
    { path: "/teacher/settings/profile", element: <Profile /> },
    { path: "/teacher/settings/password", element: <ChangePassword /> },
    { path: "/teacher/settings/preferences", element: <Preferences /> },
  ];
  