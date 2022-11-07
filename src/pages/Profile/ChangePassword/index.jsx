import {
  useCallback, useState, useMemo,
} from 'react';
import { toast } from 'react-toastify';

import { useInputErrors } from '../../../hooks/useInputErrors';
import { api } from '../../../api';

import { Heading } from '../../../components/Heading';
import { Text } from '../../../components/Text';
import { Button } from '../../../components/Button';

import * as S from './styles';
import { InputPassword } from '../../../components/Input/InputPassword';

export const ChangePassword = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const {
    hasError, setError, removeError, getMessageErrorByField,
  } = useInputErrors();

  const isFormValid = useMemo(() => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      return false;
    }

    return !hasError;
  }, [currentPassword, newPassword, confirmPassword]);

  const handleCurrentPasswordValidation = useCallback((value) => {
    if (!value) {
      setError({ field: 'currentPassword', message: 'Senha é obrigatória' });
    } else {
      removeError('newPassword');
    }
  }, [setError, removeError]);

  const handleCurrentPasswordChange = useCallback((event) => {
    const { value } = event.target;

    setCurrentPassword(() => {
      handleCurrentPasswordValidation(value);

      return value;
    });
  }, [setCurrentPassword]);

  const handleConfirmPasswordValidation = useCallback((value, newPasswordSetted) => {
    if (!value) {
      setError({ field: 'confirmPassword', message: 'Confirmar senha é obrigatório' });
    } else if (value !== (newPasswordSetted || newPassword)) {
      setError({ field: 'confirmPassword', message: 'As senhas não coincidem' });
    } else {
      removeError('confirmPassword');
    }
  }, [newPassword, setError, removeError]);

  const handleConfirmPasswordChange = useCallback((event) => {
    const { value } = event.target;

    setConfirmPassword(() => {
      handleConfirmPasswordValidation(value);

      return value;
    });
  }, [confirmPassword, setConfirmPassword]);

  const handleNewPasswordValidation = useCallback((value) => {
    if (!value) {
      setError({ field: 'newPassword', message: 'Senha é obrigatória' });
    } else if (value.length < 3) {
      setError({ field: 'newPassword', message: 'Sua senha deve ter pelo menos 3 caracteres' });
    } else {
      removeError('newPassword');
    }

    handleConfirmPasswordValidation(confirmPassword, value);
  }, [confirmPassword, setError, removeError]);

  const handleNewPasswordChange = useCallback((event) => {
    const { value } = event.target;

    setNewPassword(() => {
      handleNewPasswordValidation(value);

      return value;
    });
  }, [newPassword, setNewPassword]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      setIsSubmiting(true);
      await api.updatePasswordUser({ currentPassword, newPassword, confirmPassword });

      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsEdited(false);
      toast.success('Senha atualizada com êxito!');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmiting(false);
    }
  }, [
    currentPassword,
    newPassword,
    confirmPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    setIsEdited,
    setIsSubmiting,
  ]);

  const handleChange = useCallback(() => {
    setIsEdited(true);
  }, []);

  const handleCancel = useCallback(() => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setIsEdited(false);
  }, []);

  return (
    <S.Container>
      <Heading heading="h3">
        Alterar senha
        {' '}
        {isEdited && '*'}
      </Heading>
      <S.FormStyled onSubmit={handleSubmit} onChange={handleChange}>
        <S.InputGroup>
          <Text>Senha atual</Text>
          <InputPassword
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            errorFeedback={getMessageErrorByField('currentPassword')}
          />
        </S.InputGroup>

        <S.InputGroup>
          <Text>Nova senha</Text>
          <InputPassword
            value={newPassword}
            onChange={handleNewPasswordChange}
            errorFeedback={getMessageErrorByField('newPassword')}
          />
        </S.InputGroup>

        <S.InputGroup>
          <Text>Nova senha</Text>
          <InputPassword
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorFeedback={getMessageErrorByField('confirmPassword')}
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
