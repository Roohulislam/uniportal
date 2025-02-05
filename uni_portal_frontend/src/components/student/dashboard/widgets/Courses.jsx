import React from 'react';

const Courses= () => {
    const courses = [
        { id: 1, name: 'Introduction to Computer Science', credits: 3 },
        { id: 2, name: 'Data Structures', credits: 4 },
        { id: 3, name: 'Web Development', credits: 3 },
        { id: 4, name: 'Database Management', credits: 3 },
    ];

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">My Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id} className="py-2 border-b">
                        <span className="font-medium">{course.name}</span> - {course.credits} Credits
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;