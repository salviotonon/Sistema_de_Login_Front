import { Envelope, User, LockKey,Lock, EyeSlash, Eye} from 'phosphor-react';
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
          iconShowPassword={EyeSlash}
          iconHiddenShowPassword={Eye}
        />

        <Input
          type="password"
          placeholder="*********"
          labelName="Confirmar senha"
          icon={Lock}
          iconShowPassword={EyeSlash}
          iconHiddenShowPassword={Eye}
        />

      </S.FormStyled>
    </div>
    <S.EmptyFooter />
  </S.Container>
);
