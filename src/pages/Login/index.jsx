import { useCallback, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { AuthForm } from '../../containers/AuthForm';

export const Login = () => {
  const { isAuthenticated, handleLogin } = useContext(AuthContext);

  const handleSubmit = useCallback(async ({ name, password }) => {
    await handleLogin({ name, password });
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <AuthForm
      type="login"
      onSubmit={handleSubmit}
    />
  );
};
