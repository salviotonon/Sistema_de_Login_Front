import { Eye, EyeSlash, Lock } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import { Input } from '.';

export const InputPassword = ({ labelName, errorFeedback, ...props }) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleToggleVisiblePassword = useCallback(() => {
    setIsVisiblePassword((prevState) => !prevState);
  }, [isVisiblePassword]);

  return (
    <Input
      type={isVisiblePassword ? 'text' : 'password'}
      placeholder={isVisiblePassword ? 'Digite sua senha' : '*********'}
      labelName={labelName}
      icon={Lock}
      errorFeedback={errorFeedback}
      rightIcon={isVisiblePassword ? Eye : EyeSlash}
      onRightIconClick={handleToggleVisiblePassword}
      {...props}
    />
  );
};

InputPassword.propTypes = {
  labelName: PropTypes.string,
  errorFeedback: PropTypes.string,
};

InputPassword.defaultProps = {
  labelName: undefined,
  errorFeedback: undefined,
};
