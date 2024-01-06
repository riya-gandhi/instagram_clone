import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import Explore from './components/Explore';
import Notifications from './components/Notifications';
import DirectMessages from './components/DirectMessages';
import Dashboard from './components/Dashboard';
import useAuth from './services/useAuth';

const AuthRoute = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={<AuthRoute element={<UserProfile />} isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/explore"
            element={<AuthRoute element={<Explore />} isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/notifications"
            element={<AuthRoute element={<Notifications />} isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/messages"
            element={<AuthRoute element={<DirectMessages />} isAuthenticated={isAuthenticated} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
