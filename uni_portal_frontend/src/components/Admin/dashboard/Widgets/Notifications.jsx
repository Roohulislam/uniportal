import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a new notification
  const addNotification = (message, type = 'info') => {
    const id = `${new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`; // Unique ID based on time and random string
    const newNotification = { id, message, type };

    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  // Function to remove a notification by ID
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  // Automatically add some notifications on component mount
  useEffect(() => {
    addNotification('Professor John Doe has updated their profile.', 'info');
    addNotification('Staff member Jane Smith has completed the required training.', 'success');
    addNotification('Error: Unable to fetch professor data from the database.', 'error');
    addNotification('Warning: Upcoming faculty meeting on Friday, ensure all are informed.', 'warning');
  }, []);

  // Define notification styles based on type
  const notificationStyles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Render notifications dynamically */}
        {notifications.map((notification) => (
          <div
            key={notification.id} // Unique key using the combination of time and random string
            className={`flex items-center p-4 mb-4 rounded-lg shadow-md ${notificationStyles[notification.type]}`}
            role="alert"
          >
            <div className="flex-grow">
              <p className="font-semibold">
                {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}!
              </p>
              <p>{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="ml-4 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
