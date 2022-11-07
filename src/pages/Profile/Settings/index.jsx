import {
  useCallback, useState, useMemo, useContext,
} from 'react';
import { toast } from 'react-toastify';
import { User, Envelope, CalendarBlank } from 'phosphor-react';

import { useInputErrors } from '../../../hooks/useInputErrors';
import { AuthContext } from '../../../contexts/AuthContext';
import { api } from '../../../api';

import { Heading } from '../../../components/Heading';
import { Text } from '../../../components/Text';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import * as S from './styles';

export const Settings = () => {
  const { user } = useContext(AuthContext);

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [oldName, setOldName] = useState(user.name);
  const [name, setName] = useState(user.name);
  const [isEdited, setIsEdited] = useState(false);
  const {
    hasError, setError, removeError, getMessageErrorByField,
  } = useInputErrors();

  const isFormValid = useMemo(() => {
    if (!name) {
      return false;
    }

    return !hasError;
  }, [name]);

  const handleNameChange = useCallback((event) => {
    const { value } = event.target;

    if (!value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }

    setName(value);
  }, [name, setName, setError, removeError]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      setIsSubmiting(true);
      const { user: userData } = await api.updateNameUser({ name });

      setOldName(userData.name);
      setName(userData.name);
      setIsEdited(false);
      toast.success('Nome de usuário atualizado com êxito!');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmiting(false);
    }
  }, [setIsSubmiting, name, setOldName, setName, setIsEdited]);

  const handleChange = useCallback(() => {
    setIsEdited(true);
  }, []);

  const handleCancel = useCallback(() => {
    setName(oldName);
    setIsEdited(false);
  }, []);

  return (
    <S.Container>
      <Heading heading="h3">
        Meu perfil
        {' '}
        {isEdited && '*'}
      </Heading>
      <S.FormStyled onSubmit={handleSubmit} onChange={handleChange}>
        <S.InputGroup>
          <Text>Nome</Text>
          <Input
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Digite seu novo nome de usuário"
            icon={User}
            errorFeedback={getMessageErrorByField('name')}
          />
        </S.InputGroup>

        <S.InputGroup>
          <Text>E-mail</Text>
          <Input
            value={user.email}
            type="text"
            icon={Envelope}
            disabled
          />
        </S.InputGroup>

        <S.InputGroup>
          <Text>Cadastrado</Text>
          <Input
            type="datetime-local"
            value={user.createdAt}
            icon={CalendarBlank}
            disabled
          />
        </S.InputGroup>

        <div className="actions">
          <Button
            type="button"
            onClick={handleCancel}
            disabled={!isEdited || isSubmiting}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={!isEdited || !isFormValid}
            isLoading={isSubmiting}
          >
            Salvar alterações
          </Button>
        </div>
      </S.FormStyled>
    </S.Container>
  );
};
