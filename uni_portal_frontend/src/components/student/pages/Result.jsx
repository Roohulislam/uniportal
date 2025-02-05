import React from 'react';
import Grades from '../dashboard/widgets/Grades';

const Result = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Result Card</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <Grades />
            </div>
        </div>
    );
};

export default Result;