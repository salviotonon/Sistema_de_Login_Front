import { useCallback } from 'react';
import { AuthForm } from '../../containers/AuthForm';

export const Signup = () => {
  const handleSubmit = useCallback((user) => {
    console.log('signup submit:', user);
  }, []);

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSubmit}
    />
  );
};
