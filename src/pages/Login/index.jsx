import { useCallback } from 'react';
import { AuthForm } from '../../containers/AuthForm';

export const Login = () => {
  const handleSubmit = useCallback((user) => {
    console.log('login submit:', user);
  }, []);

  return (
    <AuthForm
      type="login"
      onSubmit={handleSubmit}
    />
  );
};
