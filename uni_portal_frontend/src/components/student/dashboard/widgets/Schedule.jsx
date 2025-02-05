import React from "react";
import { FaClock, FaBook, FaChalkboardTeacher, FaMapMarkerAlt } from "react-icons/fa";

const Schedule = () => {
  return (
    <div className="p-4 sm:p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 flex items-center">
        <FaClock className="mr-3 text-purple-600" />
        Today's Schedule
      </h2>

      <div className="space-y-6">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/40 p-4 rounded-xl border border-purple-100 shadow-sm 
                        transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/60
                        hover:shadow-lg hover:-translate-y-1"
          >
            {/* Left gradient strip */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-xl" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              {/* Time and Course Info */}
              <div className="flex items-start space-x-4">
                {/* Time */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full 
                             bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 
                             group-hover:to-pink-200 transition-colors duration-300"
                >
                  <span className="text-sm font-semibold text-purple-700">{item.time}</span>
                </div>

                {/* Course and Instructor Details */}
                <div>
                  <h3
                    className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-700 
                               transition-colors duration-300"
                  >
                    {item.course}
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaChalkboardTeacher className="mr-1 text-gray-500" />
                      {item.instructor}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 text-gray-500" />
                      {item.room}
                    </div>
                  </div>
                  <div
                className={`px-3 py-1 mt-4 sm:mt-0 sm:ml-4 rounded-full text-xs font-medium 
                            whitespace-nowrap
                            ${
                              item.status === "Ongoing"
                                ? "bg-green-100 text-green-800 text-center"
                                : item.status === "Upcoming"
                                ? "bg-blue-100 text-blue-800  text-center"
                                : "bg-gray-100 text-gray-800 text-center"
                            }`}
              >
                {item.status}
              </div>
                </div>
              </div>

              {/* Status */}
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const scheduleData = [
  {
    time: "9:00 AM",
    course: "Artificial Intelligence",
    instructor: "Dr. Mubashir Ahmad",
    room: "C-303",
    status: "Completed",
  },
  {
    time: "10:30 AM",
    course: "Mobile App Development",
    instructor: "Muhammad Rafay",
    room: "S-206",
    status: "Ongoing",
  },
  {
    time: "12:00 PM",
    course: "Operating Systems",
    instructor: "Dr. Mujtaba",
    room: "C-204",
    status: "Upcoming",
  },
];

export default Schedule;
