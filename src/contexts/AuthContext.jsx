import {
  useCallback, createContext, useMemo, useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { storage } from '../utils/Storage';
import { api } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = storage.get('auth:token');

    alert('O token:', token);
  }, []);

  const handleLogin = useCallback(async ({ name, password }) => {
    try {
      const { userData, token } = await api.login({ name, password });

      storage.store('auth:token', token);
      setUser(userData);

      alert('Autenticado! Bem vindo', user.name);
    } catch (err) {
      alert(err.message);
    }
  }, []);

  const handleSignUp = useCallback(async ({
    name, email, password, confirmPassword,
  }) => {
    try {
      const { userData, token } = await api.signup({
        name, email, password, confirmPassword,
      });

      storage.store('auth:token', token);
      setUser(userData);

      alert('Registrado! Bem vindo', user.name);
    } catch (err) {
      alert(err.message);
    }
  }, []);

  const handleLogout = useCallback(() => {
    storage.remove('auth:token');
    setUser(null);

    alert('Nunca é um adeus...');
  }, []);

  const authManager = useMemo(() => ({
    isAuthenticated: !!user,
    user,
    handleLogin,
    handleSignUp,
    handleLogout,
  }), [user]);

  return (
    <AuthContext.Provider value={authManager}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
