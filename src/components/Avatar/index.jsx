import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { ImgStyled } from './styles';

export const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <ImgStyled src={user.avatarUrl} alt="Avatar" id="avatar" />
  );
};
