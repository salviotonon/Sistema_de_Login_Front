import { SignOut } from '../dynamicIcons/SignOut';
import * as S from './styles';

export const LogoutButton = () => (
  <S.ButtonStyled
    type="button"
  >
    Sair
    <SignOut />
  </S.ButtonStyled>
);
