import { useContext, useCallback } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { AuthForm } from '../../containers/AuthForm';

export const Signup = () => {
  const { isAuthenticated, handleSignUp } = useContext(AuthContext);

  const handleSubmit = useCallback(async ({
    name, email, password, confirmPassword,
  }) => {
    await handleSignUp({
      name, email, password, confirmPassword,
    });
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSubmit}
    />
  );
};
