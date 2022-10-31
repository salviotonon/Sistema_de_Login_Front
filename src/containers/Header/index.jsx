import { Link } from 'react-router-dom';

import felipeAvatar from '../../assets/images/felipe-avatar.jpg';
import { Logo } from '../../components/Logo';
import { LogoutButton } from '../../components/LogoutButton';
import { NavBar } from '../NavBar';

import * as S from './styles';

export const Header = () => (
  <S.Container>
    <div className="logo-and-nav">
      <Logo />
      <NavBar />
    </div>

    <div className="profile-and-logout">
      <Link to="/profile" id="btn-avatar">
        <img src={felipeAvatar} alt="Avatar" id="avatar" />
      </Link>

      <LogoutButton />
    </div>
  </S.Container>
);
