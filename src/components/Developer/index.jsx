import { useContext } from 'react';
import { useTheme } from 'styled-components';

import { AuthContext } from '../../contexts/AuthContext';

export const Developer = () => {
  const theme = useTheme();

  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div style={{
      position: 'fixed', height: '100vh', top: '50px', bottom: '50px',
    }}
    >
      {isAuthenticated ? (
        <h3>
          Você está autenticado como
          {' '}
          {user.name}
        </h3>
      ) : (
        <h3 style={{ color: theme.colors.red[400] }}>Você não está autenticado</h3>
      )}
    </div>
  );
};
