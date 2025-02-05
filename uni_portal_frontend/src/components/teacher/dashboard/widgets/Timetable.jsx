import React, { useState } from "react";
import { FaPlus, FaSave } from "react-icons/fa";

const Timetable = () => {
  const [timetable, setTimetable] = useState([
    {
      day: "Monday",
      time: "10:00 AM - 12:00 PM",
      course: "Math 101",
      room: "A101",
      location: "Science Department",
    },
    {
      day: "Tuesday",
      time: "01:00 PM - 03:00 PM",
      course: "Physics 202",
      room: "B202",
      location: "Physics Department",
    },
    {
      day: "Wednesday",
      time: "09:00 AM - 11:00 AM",
      course: "Chemistry 303",
      room: "C303",
      location: "Chemistry Department",
    },
  ]);

  const [newCourse, setNewCourse] = useState("");
  const [newDay, setNewDay] = useState("Monday");
  const [newTime, setNewTime] = useState("");
  const [newRoom, setNewRoom] = useState("");
  const [newLocation, setNewLocation] = useState("");

  // Handle adding a new course to the timetable
  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse || !newTime || !newRoom || !newLocation) {
      alert("Please fill in all fields.");
      return;
    }

    const newTimetable = [
      ...timetable,
      {
        day: newDay,
        time: newTime,
        course: newCourse,
        room: newRoom,
        location: newLocation,
      },
    ];
    setTimetable(newTimetable);
    setNewCourse("");
    setNewTime("");
    setNewRoom("");
    setNewLocation("");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Timetable</h2>

      {/* Add New Course Form */}
      <form onSubmit={handleAddCourse} className="space-y-6 mb-6">
        <div>
          <label htmlFor="course" className="block text-sm font-semibold">
            Course Name
          </label>
          <input
            type="text"
            id="course"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            placeholder="Enter Course Name"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-semibold">
            Time
          </label>
          <input
            type="text"
            id="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            placeholder="Enter Time (e.g., 10:00 AM - 12:00 PM)"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="day" className="block text-sm font-semibold">
            Day
          </label>
          <select
            id="day"
            value={newDay}
            onChange={(e) => setNewDay(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
        </div>

        <div>
          <label htmlFor="room" className="block text-sm font-semibold">
            Room Number
          </label>
          <input
            type="text"
            id="room"
            value={newRoom}
            onChange={(e) => setNewRoom(e.target.value)}
            placeholder="Enter Room Number (e.g., A101)"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            placeholder="Enter Location (e.g., Science Department)"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md"
          >
            <FaPlus className="inline-block mr-2" />
            Add Course
          </button>
        </div>
      </form>

      {/* Timetable Display */}
      <div className="space-y-4">
        {timetable.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
          >
            <div className="flex-1">
              <p className="font-semibold">{entry.day}</p>
              <p>{entry.time}</p>
              <p className="text-gray-400">{entry.course}</p>
              <p className="text-sm text-gray-300">Room: {entry.room}</p>
              <p className="text-sm text-gray-300">
                Location: {entry.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
