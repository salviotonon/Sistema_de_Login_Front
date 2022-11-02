import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import felipeAvatar from '../../assets/images/felipe-avatar.jpg';
import { Logo } from '../../components/Logo';
import { LogoutButton } from '../../components/LogoutButton';
import { NavBar } from '../NavBar';

import * as S from './styles';

export const Header = ({ isAuthenticated }) => (
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

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

Header.defaultProps = {
  isAuthenticated: true,
};
