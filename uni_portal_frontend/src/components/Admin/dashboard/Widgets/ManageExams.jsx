import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageExams = () => {
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    date: '',
    duration: '',
    subject: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch exams from backend
  useEffect(() => {
    fetchExams();
  }, []);

  useEffect(() => {
    // Filter exams based on search query
    if (searchQuery) {
      setFilteredExams(
        exams.filter((exam) =>
          exam.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredExams(exams);
    }
  }, [searchQuery, exams]);

  const fetchExams = async () => {
    try {
      const response = await axios.get('/api/exams');
      const data = Array.isArray(response.data) ? response.data : [];
      setExams(data);
      setFilteredExams(data); // Initialize filtered exams
    } catch (error) {
      console.error('Error fetching exams:', error);
      setExams([]);
      setFilteredExams([]); // Handle error in filtering
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrEdit = async () => {
    try {
      if (isEditing) {
        await axios.put(`/api/exams/${formData.id}`, formData);
      } else {
        await axios.post('/api/exams', formData);
      }
      setFormData({ id: '', name: '', date: '', duration: '', subject: '' });
      setIsEditing(false);
      setShowModal(false);
      fetchExams();
    } catch (error) {
      console.error('Error saving exam:', error);
    }
  };

  const handleEdit = (exam) => {
    setFormData(exam);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/exams/${id}`);
      fetchExams();
    } catch (error) {
      console.error('Error deleting exam:', error);
    }
  };

  const openModal = () => {
    setFormData({ id: '', name: '', date: '', duration: '', subject: '' });
    setIsEditing(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-8  bg-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Manage Exams</h2>

      {/* Search Bar */}
      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/3 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          placeholder="Search by Exam Name"
        />
      </div>

      {/* Add New Exam Button */}
      <button
        onClick={openModal}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add New Exam
      </button>

      {/* Exams Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Duration</th>
              <th className="border border-gray-300 p-2">Subject</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.length > 0 ? (
              filteredExams.map((exam) => (
                <tr key={exam.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-2">{exam.name}</td>
                  <td className="border border-gray-300 p-2">{exam.date}</td>
                  <td className="border border-gray-300 p-2">{exam.duration}</td>
                  <td className="border border-gray-300 p-2">{exam.subject}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(exam)}
                      className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(exam.id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No exams available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding or Editing Exam */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h3 className="text-lg font-semibold mb-4">
              {isEditing ? 'Edit Exam' : 'Add Exam'}
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Exam Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter exam name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="e.g., 2 hours"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter subject"
                  required
                />
              </div>
            </form>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {isEditing ? 'Update Exam' : 'Add Exam'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageExams;
