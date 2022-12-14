import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';

import * as S from './styles';

export const HomeLogout = () => (
  <S.Container>
    <Heading heading="h1">
      Faça login para acessar nossa plataforma!
    </Heading>

    <Text setFontSize="large">
      Totalmente gratuíta e disponível para toda região.
    </Text>

    <div className="buttons">
      <Button
        to="/login"
      >
        Fazer login
      </Button>

      <Button
        variant="secondary"
        to="/signup"
      >
        Ainda não tenho cadastro
      </Button>
    </div>
  </S.Container>
);
