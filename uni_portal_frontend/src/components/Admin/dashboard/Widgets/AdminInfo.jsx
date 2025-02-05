/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import teacherPic from "../../../../assets/Teacher.png";
import { FaUser, FaIdCard, FaUserTie, FaBook, FaGraduationCap, FaUsers, FaUserCog, FaBirthdayCake, FaPassport, FaScroll } from "react-icons/fa";

const AdminInfo = () => {
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/teachers/");
                if (!response.ok) {
                    throw new Error("Failed to fetch teacher data");
                }
                const data = await response.json();

                if (data.length > 0) {
                    setTeacher(data[0]); // Select the first teacher
                } else {
                    throw new Error("No teacher data available.");
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTeacherData();
    }, []);

    if (loading) return <div className="text-center text-gray-600">Loading...</div>;
    if (error) return <div className="text-center text-red-600">{error}</div>;

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
                        <InfoItem icon={<FaUser />} label="Name" value={teacher?.name || "N/A"} />
                        <InfoItem icon={<FaIdCard />} label="Employee ID" value={teacher?.employee_id || "N/A"} />
                        <InfoItem icon={<FaUserTie />} label="Department" value={teacher?.department || "N/A"} />
                        <InfoItem icon={<FaBook />} label="Courses Taught" value={teacher?.courses_taught || "N/A"} />
                        <InfoItem icon={<FaGraduationCap />} label="Highest Qualification" value={teacher?.highest_qualification || "N/A"} />
                        <InfoItem icon={<FaUsers />} label="Years of Experience" value={teacher?.years_of_experience || "N/A"} />
                        <InfoItem icon={<FaUserCog />} label="Current Advisor" value={teacher?.is_current_advisor ? "Yes" : "No"} />
                        <InfoItem icon={<FaBirthdayCake />} label="Date of Birth" value={teacher?.date_of_birth || "N/A"} />
                        <InfoItem icon={<FaPassport />} label="CNIC" value={teacher?.cnic || "N/A"} />
                        <InfoItem icon={<FaScroll />} label="Research Interests" value={teacher?.research_interests || "N/A"} />
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

export default AdminInfo;
