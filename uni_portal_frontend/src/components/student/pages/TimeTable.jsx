import React from 'react';
import WeeklyTimetable from '../dashboard/widgets/Timetable';

const TimeTable = () => {
    return (
        <div className="p-6">
        {/* <h1 className="text-2xl font-bold mb-4">Time Table</h1> */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <WeeklyTimetable />
            </div>
        </div>
    );
};

export default TimeTable;