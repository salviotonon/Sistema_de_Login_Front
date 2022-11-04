import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/themes/default';

import { AuthProvider } from './contexts/AuthContext';
import { MainRoutes } from './Routes';
import { Developer } from './components/Developer';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Developer />
        <MainRoutes />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
