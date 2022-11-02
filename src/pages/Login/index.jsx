import { useCallback, useState } from 'react';
import { User } from 'phosphor-react';

import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/Input/InputPassword';
import { Text } from '../../components/Text';
import { LabelButton } from '../../components/LabelButton';
import { Button } from '../../components/Button';

import { useInputErrors } from '../../hooks/useInputErrors';

import * as S from './styles';

export const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {
    hasError, setError, removeError, getMessageErrorByField,
  } = useInputErrors();

  const isFormValid = name && password && !hasError;

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

  const handlePasswordValidation = useCallback((value) => {
    if (!value) {
      setError({ field: 'password', message: 'Senha é obrigatória' });
    } else if (value.length < 3) {
      setError({ field: 'password', message: 'Sua senha deve ter pelo menos 3 caracteres' });
    } else {
      removeError('password');
    }
  }, [setError, removeError]);

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
      name, password,
    };

    console.log('[login] submitting:', user);
  }, [name, password]);

  return (
    <S.Container>
      <div className="content">
        <Heading heading="h2">
          Login
        </Heading>

        <Text className="subtitle">
          Faça login para continuar
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

          <InputPassword
            value={password}
            onChange={handlePasswordChange}
            labelName="Senha"
            errorFeedback={getMessageErrorByField('password')}
          />

          <div className="sub-actions">
            <LabelButton to="/signup">
              Não possui conta?
            </LabelButton>

            <LabelButton to="/forgotpassword">
              Esqueceu sua senha?
            </LabelButton>
          </div>

          <div className="actions">
            <Button
              type="submit"
              disabled={!isFormValid}
            >
              Fazer login
            </Button>
          </div>

        </S.FormStyled>
      </div>
      <S.EmptyFooter />
    </S.Container>
  );
};
