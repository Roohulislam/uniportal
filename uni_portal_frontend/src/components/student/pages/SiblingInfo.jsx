import React from 'react';
import AddSiblingInfo from '../components/widgets/AddSiblingInfo';

const SiblingInfo = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Sibling Information</h1>
            <div className="bg-white shadow-md rounded-lg">
                <AddSiblingInfo />
            </div>
        </div>
    );
};

export default SiblingInfo;