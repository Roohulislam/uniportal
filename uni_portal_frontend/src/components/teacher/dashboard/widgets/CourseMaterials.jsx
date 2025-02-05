import React, { useState, useEffect } from "react";
import { FaUpload, FaDownload, FaEye, FaTrash, FaFilter, FaPlus } from "react-icons/fa";
import axios from "axios";

const CourseMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [visibleToStudents, setVisibleToStudents] = useState(true);

  // Fetch materials on component load
  useEffect(() => {
    axios.get("http://localhost:5000/materials").then((res) => {
      setMaterials(res.data);
    });
  }, []);

  // Handle file upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("course", course);
    formData.append("visibleToStudents", visibleToStudents);

    const res = await axios.post("http://localhost:5000/materials", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setMaterials([...materials, res.data]);
    setTitle("");
    setCourse("");
    setFile(null);
  };

  // Handle delete material
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/materials/${id}`);
    setMaterials(materials.filter((material) => material._id !== id));
  };

  // Filter materials based on search and filter options
  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(search.toLowerCase()) ||
      material.course.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" || material.visibleToStudents === (filter === "visible");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Course Materials</h2>

      {/* Upload Material Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-700/50 p-4 rounded-lg mb-6"
      >
        <input
          type="text"
          placeholder="Material Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select Course</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Computer Science">Computer Science</option>
        </select>
        <div className="flex items-center gap-2">
          <label className="text-sm">Visible to Students:</label>
          <input
            type="checkbox"
            checked={visibleToStudents}
            onChange={(e) => setVisibleToStudents(e.target.checked)}
            className="form-checkbox text-purple-500"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow-md transition"
        >
          <FaUpload className="inline-block mr-2" />
          Upload
        </button>
      </form>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All</option>
          <option value="visible">Visible to Students</option>
          <option value="hidden">Hidden</option>
        </select>
      </div>

      {/* Materials List */}
      <ul className="space-y-4">
        {filteredMaterials.map((material) => (
          <li
            key={material._id}
            className="flex items-center justify-between p-4 bg-gray-700 rounded-lg shadow"
          >
            <div>
              <p className="font-semibold">{material.title}</p>
              <p className="text-sm text-gray-400">{material.course}</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`http://localhost:5000/${material.filePath}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                <FaEye />
              </a>
              <a
                href={`http://localhost:5000/${material.filePath}`}
                download
                className="text-blue-400 hover:underline"
              >
                <FaDownload />
              </a>
              <button
                onClick={() => handleDelete(material._id)}
                className="text-red-400 hover:text-red-500 transition"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseMaterials;
