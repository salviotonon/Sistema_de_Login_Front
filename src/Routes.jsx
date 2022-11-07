import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { HomeLogout } from './pages/HomeLogout';
import { Authors } from './pages/Authors';
import { About } from './pages/About';

import { Profile } from './pages/Profile';
import { Settings } from './pages/Profile/Settings';
import { Avatar } from './pages/Profile/Avatar';
import { ChangePassword } from './pages/Profile/ChangePassword';
import { DeleteAccount } from './pages/Profile/DeleteAccount';

const CustomRoute = ({ type, children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (type === 'privated' && !isAuthenticated) {
    return <Navigate to="/app" />;
  }

  if (type === 'logged-out' && isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

CustomRoute.propTypes = {
  type: PropTypes.oneOf(['public', 'privated', 'logged-out']),
  children: PropTypes.node.isRequired,
};

CustomRoute.defaultProps = {
  type: 'public',
};

export const MainRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <CustomRoute type="privated">
          <Home />
        </CustomRoute>
      )}
    />

    <Route
      path="/login"
      element={(
        <CustomRoute type="logged-out">
          <Login />
        </CustomRoute>
      )}
    />

    <Route
      path="/signup"
      element={(
        <CustomRoute type="logged-out">
          <Signup />
        </CustomRoute>
      )}
    />

    <Route
      path="/forgotpassword"
      element={(
        <CustomRoute type="logged-out">
          <ForgotPassword />
        </CustomRoute>
      )}
    />

    <Route
      path="/app"
      element={(
        <CustomRoute type="logged-out">
          <HomeLogout />
        </CustomRoute>
      )}
    />

    <Route
      path="/authors"
      element={(
        <CustomRoute type="privated">
          <Authors />
        </CustomRoute>
      )}
    />

    <Route
      path="/profile"
      element={(
        <CustomRoute type="privated">
          <Profile />
        </CustomRoute>
      )}
    >
      <Route
        path="settings"
        element={<Settings />}
      />

      <Route
        path="avatar"
        element={<Avatar />}
      />

      <Route
        path="changepassword"
        element={<ChangePassword />}
      />

      <Route
        path="deleteaccount"
        element={<DeleteAccount />}
      />
    </Route>

    <Route
      path="/about"
      element={(
        <CustomRoute type="privated">
          <About />
        </CustomRoute>
      )}
    />

  </Routes>
);
