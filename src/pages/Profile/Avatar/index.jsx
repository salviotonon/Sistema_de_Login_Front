import {
  useCallback, useState, useContext,
} from 'react';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../contexts/AuthContext';
import { api } from '../../../api';

import { Avatar as AvatarComponent } from '../../../components/Avatar';
import { Heading } from '../../../components/Heading';
import { Button } from '../../../components/Button';

import * as S from './styles';
import { DropZone } from '../../../components/DropZone';

export const Avatar = () => {
  const { user } = useContext(AuthContext);

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      setIsSubmiting(true);
      await api.updateAvatarUser();

      setIsEdited(false);
      toast.success('Avatar atualizado com êxito!');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmiting(false);
    }
  }, [setIsSubmiting, setIsEdited]);

  const handleChange = useCallback(() => {
    setIsEdited(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsEdited(false);
  }, []);

  return (
    <S.Container>
      <Heading heading="h3">
        Meu avatar
        {' '}
        {isEdited && '*'}
      </Heading>
      <S.FormStyled onSubmit={handleSubmit} onChange={handleChange}>

        <div className="drop-zone-action">
          <AvatarComponent width="6.4rem" height="6.4rem" />
          <DropZone labelButton="Fazer upload de imagem" />
        </div>

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
            disabled={!isEdited}
            isLoading={isSubmiting}
          >
            Salvar alterações
          </Button>
        </div>
      </S.FormStyled>
    </S.Container>
  );
};
