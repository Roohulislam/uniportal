import React, { useState, useEffect } from "react";
import {
  FaCalendarPlus,
  FaEdit,
  FaTrash,
  FaBell,
  FaSearch,
  FaCalendarAlt,
} from "react-icons/fa";
import axios from "axios";

const CourseSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    course: "",
    date: "",
    time: "",
    location: "",
  });
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  // Fetch schedules on component load
  useEffect(() => {
    axios.get("http://localhost:5000/schedules").then((res) => {
      setSchedules(res.data);
    });
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update existing schedule
      await axios.put(`http://localhost:5000/schedules/${isEditing}`, formData);
      setSchedules((prev) =>
        prev.map((item) =>
          item._id === isEditing ? { ...item, ...formData } : item
        )
      );
      setIsEditing(null);
    } else {
      // Create new schedule
      const res = await axios.post("http://localhost:5000/schedules", formData);
      setSchedules([...schedules, res.data]);
    }
    setFormData({ course: "", date: "", time: "", location: "" });
  };

  // Handle delete schedule
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/schedules/${id}`);
    setSchedules(schedules.filter((schedule) => schedule._id !== id));
  };

  // Handle edit schedule
  const handleEdit = (schedule) => {
    setFormData(schedule);
    setIsEditing(schedule._id);
  };

  // Filter schedules based on search
  const filteredSchedules = schedules.filter((schedule) =>
    schedule.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Course Schedule</h2>

      {/* Add/Edit Schedule Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-700/50 p-4 rounded-lg mb-6"
      >
        <input
          type="text"
          placeholder="Course Name"
          value={formData.course}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, course: e.target.value }))
          }
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, date: e.target.value }))
          }
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="time"
          value={formData.time}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, time: e.target.value }))
          }
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, location: e.target.value }))
          }
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md transition"
        >
          {isEditing ? (
            <>
              <FaEdit className="inline-block mr-2" />
              Update
            </>
          ) : (
            <>
              <FaCalendarPlus className="inline-block mr-2" />
              Add Schedule
            </>
          )}
        </button>
      </form>

      {/* Search */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search schedules..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Schedule List */}
      <ul className="space-y-4">
        {filteredSchedules.map((schedule) => (
          <li
            key={schedule._id}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
          >
            <div>
              <p className="font-semibold">{schedule.course}</p>
              <p className="text-sm text-gray-400">
                {schedule.date} - {schedule.time}
              </p>
              <p className="text-sm text-gray-400">{schedule.location}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleEdit(schedule)}
                className="text-yellow-400 hover:text-yellow-500 transition"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(schedule._id)}
                className="text-red-400 hover:text-red-500 transition"
              >
                <FaTrash />
              </button>
              <button className="text-green-400 hover:text-green-500 transition">
                <FaBell />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSchedule;
