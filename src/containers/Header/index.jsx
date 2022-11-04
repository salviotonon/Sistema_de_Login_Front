import { useContext } from 'react';
import { Link } from 'react-router-dom';

import felipeAvatar from '../../assets/images/felipe-avatar.jpg';
import { Logo } from '../../components/Logo';
import { LogoutButton } from '../../components/LogoutButton';
import { AuthContext } from '../../contexts/AuthContext';
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
            <NavBar />
          )}
        </div>

        {isAuthenticated && (
          <div className="profile-and-logout">
            <Link to="/profile" id="btn-avatar">
              <img src={felipeAvatar} alt="Avatar" id="avatar" />
            </Link>

            <LogoutButton />
          </div>
        )}
      </div>
    </S.Container>
  );
};
