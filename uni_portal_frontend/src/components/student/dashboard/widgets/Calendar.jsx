// filepath: src/components/widgets/Calendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Calendar</h2>
            <Calendar
                onChange={setDate}
                value={date}
            />
        </div>
    );
};

export default CalendarWidget;