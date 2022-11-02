import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { Layout } from './containers/Layout';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { HomeLogout } from './pages/HomeLogout';
import { Authors } from './pages/Authors';
import { About } from './pages/About';
import { Profile } from './pages/Profile';

const CustomRoute = ({ isPrivated, hasDefaultLayout, children }) => {
  if (isPrivated) {
    return <Navigate to="/app" />;
  }

  if (hasDefaultLayout) {
    return (
      <Layout>
        {children}
      </Layout>
    );
  }

  return children;
};

CustomRoute.propTypes = {
  isPrivated: PropTypes.bool,
  hasDefaultLayout: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CustomRoute.defaultProps = {
  isPrivated: false,
  hasDefaultLayout: true,
};

export const MainRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <CustomRoute isPrivated>
          <Home />
        </CustomRoute>
      )}
    />

    <Route
      path="/login"
      element={(
        <CustomRoute>
          <Login />
        </CustomRoute>
      )}
    />

    <Route
      path="/signup"
      element={(
        <CustomRoute>
          <Signup />
        </CustomRoute>
      )}
    />

    <Route
      path="/app"
      element={(
        <CustomRoute>
          <HomeLogout />
        </CustomRoute>
      )}
    />

    <Route
      path="/authors"
      element={(
        <CustomRoute isPrivated>
          <Authors />
        </CustomRoute>
      )}
    />

    <Route
      path="/profile"
      element={(
        <CustomRoute isPrivated>
          <Profile />
        </CustomRoute>
      )}
    />

    <Route
      path="/about"
      element={(
        <CustomRoute>
          <About />
        </CustomRoute>
      )}
    />

  </Routes>
);
