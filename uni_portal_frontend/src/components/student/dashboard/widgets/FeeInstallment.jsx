import React from 'react';

const FeeInstallment = () => {
    const [installments, setInstallments] = React.useState([
        { amount: 15000, dueDate: "2024-04-15" },
        { amount: 15000, dueDate: "2024-05-15" },
        { amount: 15000, dueDate: "2024-06-15" },
    ]);

    return (
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-100 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Fee Installment Plan</h2>
            <div className="space-y-4">
                {installments.map((installment, index) => (
                    <div key={index} className="border p-4 rounded-md bg-white shadow-md">
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Installment {index + 1}</span>
                            <span>Rs. {installment.amount}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Due Date:</span>
                            <span>{installment.dueDate}</span>
                        </div>
                    </div>
                ))}
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Apply for Installment Plan
                </button>
            </div>
        </div>
    );
};

export default FeeInstallment;
