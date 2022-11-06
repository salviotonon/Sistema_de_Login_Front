import { useCallback, useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { AuthForm } from '../../containers/AuthForm';

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = useCallback(async ({ name, password }) => {
    await handleLogin({ name, password });
  }, []);

  return (
    <AuthForm
      type="login"
      onSubmit={handleSubmit}
    />
  );
};
