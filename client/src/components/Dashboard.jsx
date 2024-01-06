import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
