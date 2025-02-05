import React from 'react';

const ScholarshipStatus = () => {
  const scholarshipData = [
    {
      id: 1,
      scholarship: "Haroon Rashid Scholarship",
      date: "03/10/2024",
      session: "Fall 2024",
      fee: 113000,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 113000,
      chequeNo: "CUI/ATD/SDC/FA24/2415",
      remarks: "Haroon Rashid Scholarship TF Waiver 100% Rs. 129,000",
    },
    {
      id: 2,
      scholarship: "Haroon Rashid Scholarship",
      date: "02/04/2024",
      session: "Spring 2024",
      fee: 102450,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 102450,
      chequeNo: "CUI/ATD/SDC/SP24/1887",
      remarks: "Haroon Rashid Scholarship TF Waiver 100% Rs. 102450",
    },
    {
      id: 3,
      scholarship: "Haroon Rashid Scholarship",
      date: "07/12/2023",
      session: "Fall 2023",
      fee: 96000,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 96000,
      chequeNo: "CUI/ATD/SDC/FA23/1660",
      remarks: "Haroon Rashid Scholarship 100% Tuition fee waiver (Rs. 96,000) for FA23.",
    },
    {
      id: 4,
      scholarship: "Haroon Rashid Scholarship",
      date: "07/06/2023",
      session: "Spring 2023",
      fee: 94000,
      meal: 0,
      boarding: 0,
      stipend: 0,
      bookAllowance: 0,
      total: 94000,
      chequeNo: "CUI/ATD/OOD/Notif/SP23/007",
      remarks: "NULL",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-200 mb-6">Scholarship Awarded Information</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">Scholarship</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Session</th>
              <th className="border border-gray-300 px-4 py-2">Fee</th>
              <th className="border border-gray-300 px-4 py-2">Meal</th>
              <th className="border border-gray-300 px-4 py-2">Boarding</th>
              <th className="border border-gray-300 px-4 py-2">Stipend</th>
              <th className="border border-gray-300 px-4 py-2">Book Allowance</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
              <th className="border border-gray-300 px-4 py-2">Cheque No/Transaction No</th>
              <th className="border border-gray-300 px-4 py-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {scholarshipData.map((item, index) => (
              <tr
                key={item.id}
                className={`text-center ${index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"} hover:bg-gray-600 transition-colors`}
              >
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.scholarship}</td>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                <td className="border border-gray-300 px-4 py-2">{item.session}</td>
                <td className="border border-gray-300 px-4 py-2">Rs. {item.fee}</td>
                <td className="border border-gray-300 px-4 py-2">{item.meal}</td>
                <td className="border border-gray-300 px-4 py-2">{item.boarding}</td>
                <td className="border border-gray-300 px-4 py-2">{item.stipend}</td>
                <td className="border border-gray-300 px-4 py-2">{item.bookAllowance}</td>
                <td className="border border-gray-300 px-4 py-2">Rs. {item.total}</td>
                <td className="border border-gray-300 px-4 py-2">{item.chequeNo}</td>
                <td className="border border-gray-300 px-4 py-2">{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScholarshipStatus;
