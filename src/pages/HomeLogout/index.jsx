import AvatarImg from '../../assets/images/salvioton.jpg'
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';

import * as S from './styles';

export const HomeLogout = () => {


  return (
    <S.Container>
      <img src={AvatarImg} alt="Avatar" />
      <h1>
        Login
      </h1>

      <Text setFontSize='large'>
        Faça login para continuar
      </Text>

      <Button
        type="button"
      >
        Fazer login
      </Button>
    </S.Container>
  );
};