import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Envelope } from 'phosphor-react';

import { toast } from 'react-toastify';
import * as Animation from '../../configs/animations';

import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { LabelButton } from '../../components/LabelButton';
import { Text } from '../../components/Text';
import { useInputErrors } from '../../hooks/useInputErrors';
import { isEmailValid } from '../../utils/isEmailValid';

import * as S from './styles';
import { api } from '../../api';

export const ForgotPassword = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const [email, setEmail] = useState('');
  const {
    errors, setError, removeError, getMessageErrorByField,
  } = useInputErrors();

  const isInputValid = useMemo(() => email && errors.length === 0, [email, errors]);

  const handleEmailChange = useCallback((event) => {
    const { value } = event.target;

    if (!value) {
      setError({ field: 'email', message: 'E-mail é obrigatório' });
    } else if (!isEmailValid(value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }

    setEmail(value);
  }, []);

  const handleForgotPassword = useCallback(async () => {
    try {
      setIsSubmiting(true);

      const { message } = await api.restorePassword({ email });

      toast.info(message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmiting(false);
    }
  }, [email]);

  return (
    <S.Container
      as={motion.div}
      initial={Animation.container.init}
      animate={Animation.container.animate}
    >
      <motion.div
        initial={Animation.containerContent.init}
        animate={Animation.containerContent.animate}
        className="content"
      >

        <Heading heading="h2">
          Esqueceu sua senha?
        </Heading>

        <Text id="subtitle">
          Sem problemas! Vamos te ajudar nessa.
          Informe seu e-mail abaixo para enviarmos
          instruções na recuperação de sua senha.
        </Text>

        <Input
          value={email}
          onChange={handleEmailChange}
          type="text"
          placeholder="Digite seu e-mail"
          icon={Envelope}
          errorFeedback={getMessageErrorByField('email')}
        />

        <LabelButton id="btn-back-login" to="/login">
          Voltar para login
        </LabelButton>

        <Button
          type="button"
          onClick={handleForgotPassword}
          disabled={!isInputValid}
          isLoading={isSubmiting}
        >
          Recuperar senha
        </Button>
      </motion.div>

      <S.EmptyFooter />
    </S.Container>
  );
};
