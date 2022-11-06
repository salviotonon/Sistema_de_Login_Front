import {
  useCallback, createContext, useMemo, useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { storage } from '../utils/Storage';
import { api } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      const token = storage.get('auth:token');

      if (token) {
        try {
          setIsLoading(true);
          const { user: userData } = await api.validate({ token });

          setUser(userData);
        } catch {
          toast.error('Sua sessão expirou');
        } finally {
          setIsLoading(false);
        }
      }
    };

    validateToken();
  }, []);

  const handleLogin = useCallback(async ({ name, password }) => {
    try {
      setIsLoading(true);
      const { user: userData, token } = await api.login({ name, password });

      storage.store('auth:token', token);
      setUser(userData);

      navigate('/');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSignUp = useCallback(async ({
    name, email, password, confirmPassword,
  }) => {
    try {
      setIsLoading(true);
      const { user: userData, token } = await api.signup({
        name, email, password, confirmPassword,
      });

      storage.store('auth:token', token);
      setUser(userData);

      navigate('/');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = useCallback(() => {
    storage.remove('auth:token');
    setUser(null);

    navigate('/app');
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
