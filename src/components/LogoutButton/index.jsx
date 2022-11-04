import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { SignOut } from '../dynamicIcons/SignOut';

import * as S from './styles';

export const LogoutButton = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <S.ButtonStyled
      type="button"
      onClick={handleLogout}
    >
      Sair
      <SignOut />
    </S.ButtonStyled>
  );
};
