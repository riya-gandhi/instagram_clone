import React, { useState, useEffect } from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('YOUR_BACKEND_API/notifications')
      .then((response) => response.json())
      .then((data) => setNotifications(data.notifications))
      .catch((error) => console.error('Error fetching notifications:', error));
  }, []); 

  return (
    <div>
      <h1>Notifications</h1>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
