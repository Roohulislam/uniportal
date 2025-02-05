import React from "react";

const Timetable = () => {
    const schedule = [
        {
            day: "Monday",
            slots: [
                { time: "08:00 To 09:30", location: "S206 (56M)", course: "Mobile Application Development", teacher: "Muhammad Rafay Hannan" },
                { time: "09:40 To 11:10", location: "S207 (56M)", course: "Mobile Application Development", teacher: "Muhammad Rafay Hannan" },
                { time: "11:20 To 12:50", location: "C-303 (50)", course: "Artificial Intelligence", teacher: "Dr. Mubashir Ahmad" },
                { time: "13:00 To 15:30", location: "C-303 (50)", course: "Artificial Intelligence Lab", teacher: "Dr. Mubashir Ahmad" },
            ],
        },
        {
            day: "Tuesday",
            slots: [
                { time: "09:00 To 10:30", location: "S107 (42)", course: "Design and Analysis of Algorithms", teacher: "Ehazz Mustafa" },
                { time: "10:40 To 12:10", location: "S101 (42)", course: "Design and Analysis of Algorithms", teacher: "Ehazz Mustafa" },
            ],
        },
        {
            day: "Wednesday",
            slots: [
                { time: "09:00 To 10:30", location: "C204 (50)", course: "Principles of Operating Systems", teacher: "Dr. Ghulam Mujtaba" },
                { time: "10:40 To 12:10", location: "C205 (50M)", course: "Compiler Construction", teacher: "Faryal Jahangir" },
            ],
        },
        {
            day: "Thursday",
            slots: [
                { time: "09:00 To 10:30", location: "C106 (50)", course: "Artificial Intelligence", teacher: "Dr. Mubashir Ahmad" },
            ],
        },
        {
            day: "Friday",
            slots: [
                { time: "09:00 To 10:30", location: "S203 (50)", course: "Principles of Operating Systems", teacher: "Dr. Ghulam Mujtaba" },
                { time: "10:40 To 12:10", location: "C205 (50)", course: "Artificial Intelligence Lab", teacher: "Dr. Mubashir Ahmad" },
            ],
        },
    ];

    const timeSlots = Array.from(new Set(schedule.flatMap(day => day.slots.map(slot => slot.time))));

    return (
        <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Weekly Timetable</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-gray-700 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="py-3 px-4 text-left text-gray-200 border border-gray-600">Day</th>
                            {timeSlots.map((time, index) => (
                                <th key={index} className="py-3 px-4 text-left text-gray-200 border border-gray-600">{time}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((daySchedule, index) => (
                            <tr key={index} className="group">
                                <td className="py-3 px-4 text-center text-gray-200 border border-gray-600 bg-gray-800">{daySchedule.day}</td>
                                {timeSlots.map((time, timeIndex) => {
                                    const slot = daySchedule.slots.find(slot => slot.time === time);
                                    return (
                                        <td
                                            key={timeIndex}
                                            className="border border-gray-600 p-2  transform transition-all duration-200"
                                        >
                                            {slot ? (
                                                <div className="flex flex-col justify-between h-full">
                                                    <div className="text-sm text-gray-200">{slot.location}</div>
                                                    <div className="font-semibold text-white">{slot.course}</div>
                                                    <div className="italic text-gray-400 text-sm">{slot.teacher}</div>
                                                </div>
                                            ) : null}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Timetable;
