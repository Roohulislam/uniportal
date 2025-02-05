import React, { useState } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Update Announcement
  const handleAddOrUpdateAnnouncement = () => {
    if (!formData.title || !formData.description || !formData.date) {
      alert('Please fill out all fields.');
      return;
    }

    if (editIndex !== null) {
      // Update existing announcement
      const updatedAnnouncements = announcements.map((announcement, index) =>
        index === editIndex ? formData : announcement
      );
      setAnnouncements(updatedAnnouncements);
      setEditIndex(null);
    } else {
      // Add new announcement
      setAnnouncements([...announcements, formData]);
    }

    setFormData({ title: '', description: '', date: '' });
  };

  // Edit Announcement
  const handleEditAnnouncement = (index) => {
    setEditIndex(index);
    setFormData(announcements[index]);
  };

  // Delete Announcement
  const handleDeleteAnnouncement = (index) => {
    const updatedAnnouncements = announcements.filter((_, i) => i !== index);
    setAnnouncements(updatedAnnouncements);
  };

  return (
    <div className="min-h-screen bg-gray-300 rounded-lg p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Announcements</h1>

        {/* Form Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {editIndex !== null ? 'Edit Announcement' : 'Add New Announcement'}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="border p-3 rounded-lg w-full"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="border p-3 rounded-lg w-full"
              rows="4"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border p-3 rounded-lg w-full"
            />
          </div>
          <button
            onClick={handleAddOrUpdateAnnouncement}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            {editIndex !== null ? 'Update Announcement' : 'Add Announcement'}
          </button>
        </div>

        {/* Announcement List Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Announcements</h2>
          {announcements.length > 0 ? (
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-lg border border-gray-200"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{announcement.title}</h3>
                      <p className="text-sm text-gray-600">{announcement.date}</p>
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEditAnnouncement(index)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAnnouncement(index)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{announcement.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No announcements added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
