import React from 'react';
import TeacherHeader from '../components/teacher/common/TeacherHeader';
import StudentHeader from '../components/student/common/Header';
import TeacherSidebar from '../components/teacher/common/TeacherSidebar';
import StudentSidebar from '../components/student/common/Sidebar';
import AdminHeader from '../components/Admin/common/AdminHeader';
import AdminSidebar from '../components/Admin/common/AdminSidebar';

const MainLayout = ({ children, user }) => {
    let Header, Sidebar;

    if (user?.role === 'teacher') {
        Header = TeacherHeader;
        Sidebar = TeacherSidebar;
    } else if (user?.role === 'admin') {
        Header = AdminHeader;
        Sidebar = AdminSidebar;
    } else {
        Header = StudentHeader;
        Sidebar = StudentSidebar;
    }
    return (
        <div className="flex flex-col h-screen">
            <Header user={user} />
            <div className="flex flex-1">
                <Sidebar user={user} />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;