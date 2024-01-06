import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default AuthRoute;
