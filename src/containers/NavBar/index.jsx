import { Code, House, UserList } from 'phosphor-react';
import { NavSelecter } from '../../components/NavSelecter';

import { NavStyled } from './styles';

export const NavBar = () => (
  <NavStyled>
    <NavSelecter
      to="/"
      icon={House}
    >
      Home
    </NavSelecter>

    <NavSelecter
      to="/profile"
      icon={UserList}
    >
      Meu perfil
    </NavSelecter>

    <NavSelecter
      to="/about"
      icon={Code}
    >
      Sobre
    </NavSelecter>
  </NavStyled>
);
