import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import theme from './styles/themes/default';

import { ToastContainerModified } from './containers/ToastContainerModified';
import { AuthProvider } from './contexts/AuthContext';
import { MainRoutes } from './Routes';
import { Layout } from './containers/Layout';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <ToastContainerModified />
        <Layout>
          <MainRoutes />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
