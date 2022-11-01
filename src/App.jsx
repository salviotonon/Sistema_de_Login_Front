import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/themes/default';

import { MainRoutes } from './Routes';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainRoutes />
    </ThemeProvider>
  </BrowserRouter>
);
