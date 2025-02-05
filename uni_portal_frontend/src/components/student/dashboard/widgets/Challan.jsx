import React from 'react';

const Challan = () => {
    const challanData = {
        challanNo: "CHN-2024-001",
        dueDate: "2024-04-15",
        amount: 45000,
        status: "Unpaid"
    };

    return (
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-100 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Fee Challan</h2>
            <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                    <span className="font-medium text-gray-700">Challan No:</span>
                    <span className="text-gray-900">{challanData.challanNo}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span className="font-medium text-gray-700">Due Date:</span>
                    <span className="text-gray-900">{challanData.dueDate}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                    <span className="font-medium text-gray-700">Amount:</span>
                    <span className="text-gray-900">Rs. {challanData.amount}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Status:</span>
                    <span className={`font-semibold ${challanData.status === 'Unpaid' ? 'text-red-500' : 'text-green-500'}`}>{challanData.status}</span>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                    Download Challan
                </button>
            </div>
        </div>
    );
};

export default Challan;
