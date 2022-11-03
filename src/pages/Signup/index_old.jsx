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

import { isEmailValid } from '../../utils/isEmailValid';
import { useInputErrors } from '../../hooks/useInputErrors';

import * as S from './styles';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {
    hasError, setError, removeError, getMessageErrorByField,
  } = useInputErrors();

  const isFormValid = name && email && password && confirmPassword && !hasError;

  const handleNameValidation = useCallback((value) => {
    if (!value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }, [setError, removeError]);

  const handleNameChange = useCallback((event) => {
    const { value } = event.target;

    setName(() => {
      handleNameValidation(value);

      return value;
    });
  }, [name, setName]);

  const handleEmailValidation = useCallback((value) => {
    if (!value) {
      setError({ field: 'email', message: 'E-mail é obrigatório' });
    } else if (!isEmailValid(value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }, [setError, removeError]);

  const handleEmailChange = useCallback((event) => {
    const { value } = event.target;

    setEmail(() => {
      handleEmailValidation(value);

      return value;
    });
  }, [email, setEmail]);

  const handleConfirmPasswordValidation = useCallback((value, newPasswordSetted) => {
    if (!value) {
      setError({ field: 'confirmPassword', message: 'Confirmar senha é obrigatório' });
    } else if (value !== (newPasswordSetted || password)) {
      setError({ field: 'confirmPassword', message: 'As senhas não coincidem' });
    } else {
      removeError('confirmPassword');
    }
  }, [password, setError, removeError]);

  const handleConfirmPasswordChange = useCallback((event) => {
    const { value } = event.target;

    setConfirmPassword(() => {
      handleConfirmPasswordValidation(value);

      return value;
    });
  }, [confirmPassword, setConfirmPassword]);

  const handlePasswordValidation = useCallback((value) => {
    if (!value) {
      setError({ field: 'password', message: 'Senha é obrigatória' });
    } else if (value.length < 3) {
      setError({ field: 'password', message: 'Sua senha deve ter pelo menos 3 caracteres' });
    } else {
      removeError('password');
    }

    handleConfirmPasswordValidation(confirmPassword, value);
  }, [confirmPassword, setError, removeError]);

  const handlePasswordChange = useCallback((event) => {
    const { value } = event.target;

    setPassword(() => {
      handlePasswordValidation(value);

      return value;
    });
  }, [password, setPassword]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const user = {
      name, email, password, confirmPassword,
    };

    console.log('[register] submitting:', user);
  }, [name, email, password, confirmPassword]);

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
            errorFeedback={getMessageErrorByField('name')}
          />

          <Input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Digite seu e-mail"
            labelName="E-mail"
            icon={Envelope}
            errorFeedback={getMessageErrorByField('email')}
          />

          <InputPassword
            value={password}
            onChange={handlePasswordChange}
            labelName="Senha"
            errorFeedback={getMessageErrorByField('password')}
          />

          <InputPassword
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            labelName="Confirmar senha"
            errorFeedback={getMessageErrorByField('confirmPassword')}
          />

          <div className="sub-actions">
            <LabelButton to="/login">
              Já possui uma conta?
            </LabelButton>
          </div>

          <div className="actions">
            <Button
              type="submit"
              disabled={!isFormValid}
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
