import { useContext, useCallback } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { AuthForm } from '../../containers/AuthForm';

export const Signup = () => {
  const { handleSignUp } = useContext(AuthContext);

  const handleSubmit = useCallback(async ({
    name, email, password, confirmPassword,
  }) => {
    await handleSignUp({
      name, email, password, confirmPassword,
    });
  }, []);

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSubmit}
    />
  );
};
