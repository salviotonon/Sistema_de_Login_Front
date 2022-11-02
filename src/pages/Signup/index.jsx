import {
  Envelope, User,
} from 'phosphor-react';
import { useCallback, useState } from 'react';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/Input/InputPassword';
import { Text } from '../../components/Text';
import { LabelButton } from '../../components/LabelButton';
import { Button } from '../../components/Button';

import * as S from './styles';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = useCallback((event) => {
    const { value } = event.target;

    setName(value);
  }, [name, setName]);

  const handleEmailChange = useCallback((event) => {
    const { value } = event.target;

    setEmail(value);
  }, [email, setEmail]);

  const handlePasswordChange = useCallback((event) => {
    const { value } = event.target;

    setPassword(value);
  }, [password, setPassword]);

  const handleConfirmPasswordChange = useCallback((event) => {
    const { value } = event.target;

    setConfirmPassword(value);
  }, [confirmPassword, setConfirmPassword]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    console.log('[register] submit!');
  }, []);

  return (
    <S.Container>
      <div className="content">
        <Heading heading="h2">
          Cadastrar
        </Heading>

        <Text className="subtitle">
          Cadastre-se para continuar
        </Text>

        <S.FormStyled onSubmit={handleSubmit}>
          <Input
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Digite seu nome de usuário"
            labelName="Nome do usuário"
            icon={User}
          />

          <Input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Digite seu e-mail"
            labelName="E-mail"
            icon={Envelope}
          />

          <InputPassword
            value={password}
            onChange={handlePasswordChange}
            labelName="Senha"
          />

          <InputPassword
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            labelName="Confirmar senha"
          />

          <div className="sub-actions">
            <LabelButton to="/login">
              Já possui uma conta?
            </LabelButton>
          </div>

          <div className="actions">
            <Button
              type="submit"
            >
              Fazer cadastro
            </Button>
          </div>

        </S.FormStyled>
      </div>
      <S.EmptyFooter />
    </S.Container>
  );
};
