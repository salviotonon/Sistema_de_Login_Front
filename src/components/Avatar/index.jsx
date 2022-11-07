import { useContext } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../../contexts/AuthContext';

import { ImgStyled } from './styles';

export const Avatar = ({ width, height }) => {
  const { user } = useContext(AuthContext);

  return (
    <ImgStyled src={user.avatarUrl} alt="Avatar" id="avatar" width={width} height={height} />
  );
};

Avatar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Avatar.defaultProps = {
  width: '4.4rem',
  height: '4.4rem',
};
