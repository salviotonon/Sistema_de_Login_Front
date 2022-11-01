import { User, LockKey, EyeSlash, Eye} from 'phosphor-react';
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
        type="text"
        labelName="Nome do usuário"
        icon={User}
        placeholder="Digite seu nome de usuário"
      />
      <S.StyledForm>
        <Input
          type="password"
          labelName="Senha"
          icon={LockKey}
          placeholder="***************"
          iconShowPassword={EyeSlash}
          iconHiddenShowPassword={Eye}
        />
      </S.StyledForm>
      <div className='box-label-button'>
        <LabelButton to="/Signup">Não possui conta?</LabelButton>
        <LabelButton to="/Signup">Esqueceu sua senha?</LabelButton>
      </div>
      <Button
        to="/login"
        className="btn"
        variant="main"
      >
        Login
      </Button>
    </div>
  </S.Container>
);
