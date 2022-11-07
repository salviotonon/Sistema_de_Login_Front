import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { Text } from '../../components/Text';

import * as S from './styles';
import { storage } from '../../utils/Storage';

export const Developer = () => {
  const { user, isLoading } = useContext(AuthContext);

  return (
    <S.Container>
      <Text size="small">
        <ul>
          <li>
            User:
            {' '}
            {JSON.stringify(user)}
          </li>
          <li>
            auth:user:
            {' '}
            {storage.get('auth:user')}
          </li>
          <li>
            auth:token:
            {' '}
            {storage.get('auth:token')}
          </li>
          <li>
            loading:
            {' '}
            {isLoading.toString()}
          </li>
        </ul>
      </Text>
    </S.Container>
  );
};
