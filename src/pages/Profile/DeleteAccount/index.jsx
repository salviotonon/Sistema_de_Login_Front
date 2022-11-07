import {
  useCallback, useState, useMemo,
  useContext,
} from 'react';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../contexts/AuthContext';
import { useInputErrors } from '../../../hooks/useInputErrors';
import { api } from '../../../api';

import { Heading } from '../../../components/Heading';
import { Text } from '../../../components/Text';
import { InputPassword } from '../../../components/Input/InputPassword';
import { Button } from '../../../components/Button';

import * as S from './styles';

export const DeleteAccount = () => {
  const { handleLogout } = useContext(AuthContext);

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [password, setPassword] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const {
    hasError, setError, removeError, getMessageErrorByField,
  } = useInputErrors();

  const isFormValid = useMemo(() => {
    if (!password) {
      return false;
    }

    return !hasError;
  }, [password]);

  const handlePasswordChange = useCallback((event) => {
    const { value } = event.target;

    if (!value) {
      setError({ field: 'password', message: 'Senha é obrigatório' });
    } else {
      removeError('password');
    }

    setPassword(value);
  }, [password, setPassword, setError, removeError]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      setIsSubmiting(true);
      await api.deleteUserAccount({ password });
      setIsSubmiting(false);

      handleLogout();
      toast.success('Sua conta foi deletada e você foi deslogado');
    } catch (err) {
      toast.error(err.message);
      setIsSubmiting(false);
    }
  }, [setIsSubmiting, password]);

  const handleChange = useCallback(() => {
    setIsEdited(true);
  }, []);

  return (
    <S.Container>
      <Heading heading="h3">
        Deletar conta
        {' '}
        {isEdited && '*'}
      </Heading>
      <Text id="warn">
        Você tem certeza que deseja excluir sua conta?
        <br />
        Essa ação
        {' '}
        <strong>não poderá ser desfeita</strong>
        {' '}
        e todos seus dados
        salvos serão perdidos.
      </Text>
      <S.FormStyled onSubmit={handleSubmit} onChange={handleChange}>
        <S.InputGroup>
          <Text>Nome</Text>
          <InputPassword
            value={password}
            onChange={handlePasswordChange}
            errorFeedback={getMessageErrorByField('password')}
          />
        </S.InputGroup>

        <div className="actions">
          <Button
            type="submit"
            variant="danger"
            disabled={!isEdited || !isFormValid}
            isLoading={isSubmiting}
          >
            Tenho certeza do que estou fazendo
          </Button>
        </div>
      </S.FormStyled>
    </S.Container>
  );
};
