import React from 'react';

const Grades = () => {
    const grades = [
        { course: 'Mathematics', grade: 'A' },
        { course: 'Physics', grade: 'B+' },
        { course: 'Chemistry', grade: 'A-' },
        { course: 'History', grade: 'B' },
    ];

    return (
        <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Grades</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-gray-700 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="py-3 px-4 text-left text-gray-200">Course</th>
                            <th className="py-3 px-4 text-left text-gray-200">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index} className="border-b border-gray-600 hover:bg-gray-600">
                                <td className="py-2 px-4 text-gray-200">{item.course}</td>
                                <td className="py-2 px-4 text-gray-200">{item.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Grades;
