import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({ children, ...props }) => (
  <S.StyledButton
    {...props}
  >
    {children}
  </S.StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
