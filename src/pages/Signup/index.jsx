import {
  Envelope, User,
} from 'phosphor-react';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/Input/InputPassword';
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
        <Input
          type="text"
          placeholder="Digite seu nome de usuário"
          labelName="Nome do usuário"
          icon={User}
        />

        <Input
          type="email"
          placeholder="Digite seu e-mail"
          labelName="E-mail"
          icon={Envelope}
        />

        <InputPassword labelName="Senha" />

        <InputPassword labelName="Confirmar senha" />

      </S.FormStyled>
    </div>
    <S.EmptyFooter />
  </S.Container>
);
