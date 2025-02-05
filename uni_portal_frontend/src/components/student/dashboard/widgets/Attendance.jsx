import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Attendance = () => {
  const getStatusConfig = (attendance) => {
    if (attendance >= 90) {
      return {
        color: "from-emerald-500 to-green-500",
        status: "Excellent",
        description: "Outstanding attendance record!",
        ringColor: "text-emerald-500",
      };
    } else if (attendance >= 80) {
      return {
        color: "from-blue-500 to-cyan-500",
        status: "Good",
        description: "Maintaining consistent attendance",
        ringColor: "text-blue-500",
      };
    } else if (attendance >= 75) {
      return {
        color: "from-yellow-500 to-orange-500",
        status: "Warning",
        description: "Close to minimum requirement",
        ringColor: "text-yellow-500",
      };
    } else {
      return {
        color: "from-red-500 to-pink-500",
        status: "Critical",
        description: "Below attendance requirement",
        ringColor: "text-red-500",
      };
    }
  };

  const attendanceData = [
    { course: "Mobile App Dev", attendance: 85 },
    { course: "AI", attendance: 90 },
    { course: "DAA", attendance: 80 },
    { course: "OS", attendance: 95 },
    { course: "Compiler", attendance: 78 },
  ];

  return (
    <div className="p-4 sm:p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 flex items-center">
        <FaGraduationCap className="mr-3 text-purple-600" />
        Attendance Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {attendanceData.map((item, index) => {
          const config = getStatusConfig(item.attendance);
          return (
            <div
              key={index}
              className="group relative bg-white/40 rounded-xl border border-purple-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white/60"
            >
              <div className="relative flex flex-col items-center">
                <div
                  className="relative"
                  style={{
                    width: "clamp(6rem, 20vw, 8rem)",
                    height: "clamp(6rem, 20vw, 8rem)",
                  }}
                >
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-200"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className={config.ringColor}
                      strokeWidth="8"
                      strokeDasharray={`${item.attendance * 2.51327}, 251.327`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`text-xl sm:text-2xl font-bold bg-gradient-to-br ${config.color} text-transparent bg-clip-text`}
                    >
                      {item.attendance}%
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-sm sm:text-lg font-semibold text-gray-800 text-center">
                  {item.course}
                </h3>
                <span
                  className={`mt-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${config.color} text-white`}
                >
                  {config.status}
                </span>
                <p className="mt-2 text-xs text-gray-600 text-center">
                  {config.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;
