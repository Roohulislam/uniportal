import React, { useState, useEffect } from 'react';

const UploadResult = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch exams for exam selection
  useEffect(() => {
    const fetchExams = () => {
      // Simulated exam data for the example
      setExams([
        { id: 1, name: 'Math Exam', date: '2025-01-10' },
        { id: 2, name: 'Science Exam', date: '2025-01-15' },
        { id: 3, name: 'History Exam', date: '2025-01-20' },
      ]);
    };
    fetchExams();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleExamChange = (e) => {
    setSelectedExam(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedExam || !file) {
      setMessage('Please select an exam and upload a file.');
      return;
    }

    setUploading(true);
    setMessage('');
    
    // Simulate a file upload process
    setTimeout(() => {
      setUploading(false);
      setMessage('Results uploaded successfully!');
    }, 2000); // Simulated upload delay
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Upload Exam Results</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Exam Selection */}
        <div className="mb-4">
          <label htmlFor="exam" className="block text-sm font-medium mb-2">
            Select Exam
          </label>
          <select
            id="exam"
            value={selectedExam}
            onChange={handleExamChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select an exam</option>
            {exams.map((exam) => (
              <option key={exam.id} value={exam.id}>
                {exam.name} ({exam.date})
              </option>
            ))}
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium mb-2">
            Upload Results File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            accept=".csv, .xlsx, .xls"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            disabled={uploading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {uploading ? 'Uploading...' : 'Upload Results'}
          </button>
        </div>
      </form>

      {/* Message */}
      {message && (
        <div className="mt-4 text-center text-sm font-semibold text-gray-600">
          {message}
        </div>
      )}
    </div>
  );
};

export default UploadResult;
