import { useMemo, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Envelope, User } from 'phosphor-react';

import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/Input/InputPassword';
import { LabelButton } from '../../components/LabelButton';
import { Text } from '../../components/Text';
import { useInputErrors } from '../../hooks/useInputErrors';
import { isEmailValid } from '../../utils/isEmailValid';

import * as S from './styles';

const dynamicContents = {
  title: {
    login: 'Login',
    signup: 'Cadastrar',
  },
  subtitle: {
    login: 'Faça login para continuar',
    signup: 'Cadastre-se para continuar',
  },
  submitButton: {
    login: 'Fazer login',
    signup: 'Fazer cadastro',
  },
};

const itemsAnimation = {
  show: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export const AuthForm = ({ onSubmit, type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {
    hasError, setError, removeError, getMessageErrorByField,
  } = useInputErrors();

  const isFormValid = useMemo(() => {
    if (type === 'signup') {
      if (!email || !confirmPassword) {
        return false;
      }
    }

    if (!name || !password) {
      return false;
    }

    return !hasError;
  }, [type, name, email, password, confirmPassword]);

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
    const isRequired = type === 'signup';

    if (!value) {
      setError({ field: 'email', message: 'E-mail é obrigatório', isRequired });
    } else if (!isEmailValid(value)) {
      setError({ field: 'email', message: 'E-mail inválido', isRequired });
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
    const isRequired = type === 'signup';

    if (!value) {
      setError({ field: 'confirmPassword', message: 'Confirmar senha é obrigatório', isRequired });
    } else if (value !== (newPasswordSetted || password)) {
      setError({ field: 'confirmPassword', message: 'As senhas não coincidem', isRequired });
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

  const handlePreSubmit = useCallback((event) => {
    event.preventDefault();

    const user = {
      name: name || null,
      email: email || null,
      password: password || null,
      confirmPassword: confirmPassword || null,
    };

    onSubmit(user);
  }, [name, email, password, confirmPassword]);

  return (
    <S.Container
      as={motion.div}
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <motion.div
        animate="show"
        exit="closed"
        variants={{
          show: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
        className="content"
      >
        <Heading
          as={motion.h2}
          variants={itemsAnimation}
          heading="h2"
        >
          {dynamicContents.title[type]}
        </Heading>

        <Text
          as={motion.span}
          variants={itemsAnimation}
          className="subtitle"
        >
          {dynamicContents.subtitle[type]}
        </Text>

        <S.FormStyled onSubmit={handlePreSubmit}>
          <Input
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Digite seu nome de usuário"
            labelName="Nome do usuário"
            icon={User}
            errorFeedback={getMessageErrorByField('name')}
          />

          {type === 'signup' && (
            <Input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Digite seu e-mail"
              labelName="E-mail"
              icon={Envelope}
              errorFeedback={getMessageErrorByField('email')}
            />
          )}

          <InputPassword
            value={password}
            onChange={handlePasswordChange}
            labelName="Senha"
            errorFeedback={getMessageErrorByField('password')}
          />

          {type === 'signup' && (
            <InputPassword
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              labelName="Confirmar senha"
              errorFeedback={getMessageErrorByField('confirmPassword')}
            />
          )}

          <div className="sub-actions">

            {type === 'signup' && (
              <LabelButton to="/login">
                Já possui uma conta?
              </LabelButton>
            )}

            {type === 'login' && (
              <>
                <LabelButton to="/signup">
                  Não possui conta?
                </LabelButton>

                <LabelButton to="/forgotpassword">
                  Esqueceu sua senha?
                </LabelButton>
              </>
            )}

          </div>

          <div className="actions">
            <Button
              type="submit"
              disabled={!isFormValid}
            >
              {dynamicContents.submitButton[type]}
            </Button>
          </div>

        </S.FormStyled>
      </motion.div>
      <S.EmptyFooter />
    </S.Container>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};
