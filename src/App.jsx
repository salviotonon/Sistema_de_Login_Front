import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './assets/styles/theme';
import { MainRoutes } from './Routes';
import GlobalStyle from './assets/styles/global';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}