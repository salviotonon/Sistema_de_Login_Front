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
        type="button"
      >
        Fazer login
      </Button>

      <Button
        type="button"
        variant="secondary"
      >
        Ainda não tenho cadastro
      </Button>
    </div>
  </S.Container>
);
