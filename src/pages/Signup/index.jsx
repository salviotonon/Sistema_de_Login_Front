import { Heading } from '../../components/Heading';
import { LabelButton } from '../../components/LabelButton';
import { Text } from '../../components/Text';

import * as S from './styles';

export const Signup = () => (
  <S.Container>
    <div className="content">
      <Heading heading="h2">
        Cadastrar
      </Heading>

      <Text className="subtitle">
        Cadastre-se para continuar
      </Text>

      <S.FormStyled>
        <LabelButton to="/login">
          Já possuí uma conta?
        </LabelButton>
      </S.FormStyled>
    </div>
    <S.EmptyFooter />
  </S.Container>
);
