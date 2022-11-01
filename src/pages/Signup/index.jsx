import {
  Envelope, EyeClosed, Lock, User,
} from 'phosphor-react';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
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

        <Input
          type="password"
          placeholder="*********"
          labelName="Senha"
          icon={Lock}
          rightIcon={EyeClosed}
        />

        <Input
          type="password"
          placeholder="*********"
          labelName="Confirmar senha"
          icon={Lock}
          rightIcon={EyeClosed}
          onRightIconClick={() => console.log('Clicou!')}
        />

      </S.FormStyled>
    </div>
    <S.EmptyFooter />
  </S.Container>
);
