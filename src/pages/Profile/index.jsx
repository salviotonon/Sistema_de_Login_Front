import { NavBar } from '../../containers/NavBar';

import { Heading } from '../../components/Heading';

import * as S from './styles';

export const Profile = () => (
  <S.Container>
    <Heading>
      Configurações —
    </Heading>
    <S.BottomContainer>
      <S.AsideContainer>
        <NavBar />
      </S.AsideContainer>
      <S.SectionContainer>
        bbb
      </S.SectionContainer>
    </S.BottomContainer>
  </S.Container>
);
