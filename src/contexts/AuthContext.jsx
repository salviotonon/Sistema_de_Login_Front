import {
  useCallback, createContext, useMemo, useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { storage } from '../utils/Storage';
import { api } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      setIsLoading(true);

      const token = storage.get('auth:token');

      if (token) {
        try {
          const { user: userData } = await api.validate({ token });

          setUser(userData);
        } catch {
          toast.error('Sua sessão expirou');
        }
      }

      setIsLoading(false);
    };

    validateToken();
  }, []);

  const handleLogin = useCallback(async ({ name, password }) => {
    try {
      const { user: userData, token } = await api.login({ name, password });

      storage.store('auth:token', token);
      setUser(userData);
    } catch (err) {
      toast.error(err.message);
    }
  }, []);

  const handleSignUp = useCallback(async ({
    name, email, password, confirmPassword,
  }) => {
    try {
      const { user: userData, token } = await api.signup({
        name, email, password, confirmPassword,
      });

      storage.store('auth:token', token);
      setUser(userData);
    } catch (err) {
      toast.error(err.message);
    }
  }, []);

  const handleLogout = useCallback(() => {
    storage.remove('auth:token');
    setUser(null);
  }, []);

  const authManager = useMemo(() => ({
    isLoading,
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
