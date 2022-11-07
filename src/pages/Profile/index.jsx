import { useLocation, Navigate, Outlet } from 'react-router-dom';
import {
  User, Image, LockKey, Trash,
} from 'phosphor-react';

import { NavBar } from '../../containers/NavBar';

import { Heading } from '../../components/Heading';
import { NavSelecter } from '../../components/NavSelecter';

import * as S from './styles';

export const Profile = () => {
  const location = useLocation();

  if (location.pathname.split('/').filter((path) => path).length === 1) {
    return <Navigate to="settings" />;
  }

  return (
    <S.Container>
      <Heading>
        Configurações —
      </Heading>
      <S.BottomContainer>
        <S.AsideContainer>
          <NavBar>
            <NavSelecter
              to="settings"
              icon={User}
            >
              Meu perfil
            </NavSelecter>
            <NavSelecter
              to="avatar"
              icon={Image}
            >
              Meu avatar
            </NavSelecter>
            <NavSelecter
              to="changepassword"
              icon={LockKey}
            >
              Alterar senha
            </NavSelecter>
            <NavSelecter
              to="deleteaccount"
              icon={Trash}
            >
              Deletar conta
            </NavSelecter>
          </NavBar>
        </S.AsideContainer>
        <S.SectionContainer>
          <Outlet />
        </S.SectionContainer>
      </S.BottomContainer>
    </S.Container>
  );
};
