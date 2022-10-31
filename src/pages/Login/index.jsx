import { User, LockKey } from 'phosphor-react';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { LabelButton } from '../../components/LabelButton';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';

import * as S from './styles';

export const Login = () => (
  <S.Container>
    <div className="content">
      <Heading>Login</Heading>
      <Text className="subtitle">Faça login para continuar</Text>
      <Input
        labelName="Nome do usuário"
        icon={User}
      />
      <Input
        labelName="Senha"
        icon={LockKey}
      />
      <LabelButton to="/Signup">Não possui conta?</LabelButton>
      <LabelButton to="/Signup">Esqueceu sua senha?</LabelButton>
      <Button>Login</Button>
    </div>
  </S.Container>
);
