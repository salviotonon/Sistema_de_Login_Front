import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';

import { Layout } from './containers/Layout';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { HomeLogout } from './pages/HomeLogout';
import { Authors } from './pages/Authors';
import { About } from './pages/About';
import { Profile } from './pages/Profile';

const RouteController = ({ type, children }) => {
  const [canRender, setCanRender] = useState(false);
  const { isLoading, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (type === 'privated' && !isAuthenticated) {
        navigate('/app');
      }

      if (type === 'logged-out' && isAuthenticated) {
        navigate('/');
      }

      setCanRender(true);
      return;
    }

    setCanRender(false);
  }, [isLoading]);

  if (canRender) {
    return children;
  }

  return null;
};

RouteController.propTypes = {
  type: PropTypes.oneOf(['public', 'privated', 'logged-out']),
  children: PropTypes.node.isRequired,
};

RouteController.defaultProps = {
  type: 'public',
};

export const MainRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <RouteController type="privated">
          <Home />
        </RouteController>
      )}
    />

    <Route
      path="/login"
      element={(
        <RouteController type="logged-out">
          <Login />
        </RouteController>
      )}
    />

    <Route
      path="/signup"
      element={(
        <RouteController type="logged-out">
          <Signup />
        </RouteController>
      )}
    />

    <Route
      path="/forgotpassword"
      element={(
        <RouteController type="logged-out">
          <ForgotPassword />
        </RouteController>
      )}
    />

    <Route
      path="/app"
      element={(
        <RouteController type="logged-out">
          <HomeLogout />
        </RouteController>
      )}
    />

    <Route
      path="/authors"
      element={(
        <RouteController type="privated">
          <Authors />
        </RouteController>
      )}
    />

    <Route
      path="/profile"
      element={(
        <RouteController type="privated">
          <Profile />
        </RouteController>
      )}
    />

    <Route
      path="/about"
      element={(
        <RouteController type="privated">
          <About />
        </RouteController>
      )}
    />

  </Routes>
);
