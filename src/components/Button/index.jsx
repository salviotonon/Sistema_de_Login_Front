import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({
  variant, children, isLink, disabled, ...props
}) => {
  const Component = isLink ? Link : 'button';

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
};

Button.defaultProps = {
  variant: 'main',
  isLink: false,
  disabled: false,
};
