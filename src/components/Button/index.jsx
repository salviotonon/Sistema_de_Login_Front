import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({
  variant, children, disabled, to, ...props
}) => {
  const Component = to ? Link : 'button';

  const handleDisabledAnchor = useCallback((event) => {
    if (disabled) {
      event.preventDefault();
    }
  }, [disabled]);

  return (
    <S.ButtonContainer variant={variant}>
      <Component
        id="app-btn"
        onClick={handleDisabledAnchor}
        disabled={disabled}
        to={to}
        {...props}
      >
        {children}
      </Component>
    </S.ButtonContainer>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['main', 'secondary', 'danger']),
  children: PropTypes.node.isRequired,
  isLink: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.any,
};

Button.defaultProps = {
  variant: 'main',
  isLink: false,
  disabled: false,
  to: undefined,
};
