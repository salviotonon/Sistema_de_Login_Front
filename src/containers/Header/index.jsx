import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { House, UserList, Code } from 'phosphor-react';

import { AuthContext } from '../../contexts/AuthContext';

import { Avatar } from '../../components/Avatar';
import { Logo } from '../../components/Logo';
import { LogoutButton } from '../../components/LogoutButton';
import { NavSelecter } from '../../components/NavSelecter';

import { NavBar } from '../NavBar';

import * as S from './styles';

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <S.Container>
      <div className="fixed-content">
        <div className="logo-and-nav">
          <Logo />
          {isAuthenticated && (
            <NavBar>
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
            </NavBar>
          )}
        </div>

        {isAuthenticated && (
          <div className="profile-and-logout">
            <Link to="/profile" id="btn-avatar">
              <Avatar />
            </Link>

            <LogoutButton />
          </div>
        )}
      </div>
    </S.Container>
  );
};
