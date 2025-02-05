import React from "react";

const TeacherSchedule = () => {
  const scheduleData = [
    { day: "Monday", time: "10:00 AM - 12:00 PM", course: "Theory of Automata (CSC312)", location: "Room C-101" },
    { day: "Tuesday", time: "02:00 PM - 04:00 PM", course: "Machine Learning (CSC354)", location: "Lab S-206" },
    { day: "Wednesday", time: "10:00 AM - 12:00 PM", course: "Web Technologies (CSC336)", location: "Room C-204" },
    { day: "Thursday", time: "02:00 PM - 04:00 PM", course: "Artificial Intelligence (CSC401)", location: "Room C-303" },
    { day: "Friday", time: "10:00 AM - 12:00 PM", course: "Data Structures (CSC202)", location: "Lab S-102" },
  ];

  return (
    <div className="p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center">
        Teacher's Weekly Schedule
      </h2>
      <div className="space-y-4">
        {scheduleData.map((entry, index) => (
          <div
            key={index}
            className="group relative bg-white/40 p-4 rounded-xl border border-blue-100 shadow-sm 
                       transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/60
                       hover:shadow-lg hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-xl" />
            <div className="ml-3 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full 
                             bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 
                             group-hover:to-indigo-200 transition-colors duration-300">
                  <span className="text-sm font-semibold text-blue-700">{entry.day}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 
                               transition-colors duration-300">{entry.course}</h3>
                  <div className="text-sm text-gray-600">{entry.time}</div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-blue-700 group-hover:text-indigo-700 transition-colors">
                      Location: 
                    </span> {entry.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSchedule;
