import PropTypes from 'prop-types';

import { NavStyled } from './styles';

export const NavBar = ({ children }) => (
  <NavStyled>
    {children}
  </NavStyled>
);

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};
