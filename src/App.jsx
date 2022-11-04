import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/themes/default';

import { MainRoutes } from './Routes';
import { AuthProvider } from './contexts/AuthContext';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
