import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({
  variant, children, disabled, isLoading, to, href, ...props
}) => {
  const theme = useTheme();

  let Component = 'button';

  if (to) {
    Component = Link;
  } else if (href) {
    Component = 'a';
  }

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
        disabled={disabled || isLoading}
        to={to}
        {...props}
      >
        {children}

        {isLoading && (
          <S.ButtonLoader>
            <PulseLoader color={theme.colors.gray[300]} size={6} />
          </S.ButtonLoader>
        )}
      </Component>
    </S.ButtonContainer>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['main', 'secondary', 'danger']),
  children: PropTypes.node.isRequired,
  isLink: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  to: PropTypes.any,
  href: PropTypes.string,
};

Button.defaultProps = {
  variant: 'main',
  isLink: false,
  disabled: false,
  isLoading: false,
  to: undefined,
  href: undefined,
};
