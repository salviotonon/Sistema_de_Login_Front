import { useMemo, useCallback, useState } from 'react';

export const useInputErrors = () => {
  const [errors, setErrors] = useState([]);

  const hasError = useMemo(() => errors.length > 0, [errors]);

  const setError = useCallback(({ field, message }) => {
    if (errors.find((error) => error.field === field)) {
      setErrors((prevState) => prevState.filter((error) => error.field !== field));
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [errors, setErrors]);

  const removeError = useCallback((field) => {
    setErrors((prevState) => prevState.filter((error) => error.field !== field));
  }, [errors, setError]);

  const getMessageErrorByField = useCallback((field) => (
    errors.find((error) => error.field === field)?.message
  ), [errors, setError]);

  return {
    hasError,
    errors,
    setError,
    removeError,
    getMessageErrorByField,
  };
};
