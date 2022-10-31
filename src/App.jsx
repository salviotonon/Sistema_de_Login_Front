import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './assets/styles/themes/default';
import { MainRoutes } from './Routes';
import GlobalStyle from './assets/styles/global';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainRoutes />
    </ThemeProvider>
  </BrowserRouter>
);
