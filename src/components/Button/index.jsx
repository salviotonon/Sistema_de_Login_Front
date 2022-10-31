import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({ variant, children, ...props }) => (
  <S.StyledButton
    variant={variant}
    {...props}
  >
    {children}
  </S.StyledButton>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['main', 'secondary', 'danger']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'main',
};
