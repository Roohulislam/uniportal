import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // To include default styles

const PendingTasks = () => {
  const [taskCategories, setTaskCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch task categories
  useEffect(() => {
    const fetchTaskCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/task-categories/");
        if (!response.ok) {
          throw new Error("Failed to fetch task categories");
        }
        const data = await response.json();
        setTaskCategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTaskCategories();
  }, []);

  // Fetch tasks based on selected category
  useEffect(() => {
    const fetchTasks = async () => {
      if (!selectedCategory) return;
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/tasks/category/${selectedCategory}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTasks();
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Function to get the color based on task priority
  const getPriorityColor = (priority) => {
    if (priority === 'urgent') return 'bg-red-500'; // Red for urgent
    if (priority === 'high') return 'bg-orange-500'; // Orange for high
    return 'bg-green-500'; // Green for normal
  };

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Pending Tasks Overview</h1>

      {/* Category Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {taskCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Conditional rendering of tasks */}
      {selectedCategory && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Pending Tasks in {taskCategories.find((cat) => cat.id === selectedCategory)?.name}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div key={task.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-24 h-24 mb-4">
                  <CircularProgressbar
                    value={task.progress}
                    text={`${task.progress}%`}
                    styles={{
                      path: {
                        stroke: getPriorityColor(task.priority),
                        strokeWidth: 10,
                      },
                      trail: {
                        stroke: "#e6e6e6",
                        strokeWidth: 10,
                      },
                      text: {
                        fill: getPriorityColor(task.priority),
                        fontSize: "16px",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </div>
                <h3 className="font-medium text-lg text-center mb-2">{task.task}</h3>
                <p className="text-sm text-gray-500 text-center mb-2">{task.description}</p>
                <span className={`text-xs py-1 px-2 rounded-full ${getPriorityColor(task.priority)} text-white`}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingTasks;
