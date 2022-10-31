import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

import * as S from './styles';

export const HomeLogout = () => (
  <S.Container>
    <Heading heading="h1">
      Login
    </Heading>

    <Text setFontSize="large">
      Faça login para continuar
    </Text>

    <Button
      type="button"
    >
      Fazer login
    </Button>
  </S.Container>
);
