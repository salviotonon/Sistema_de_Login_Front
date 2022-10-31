import PropTypes from 'prop-types';
import { Footer } from '../Footer';

import { Header } from '../Header';

import * as S from './styles';

export const Layout = ({ children }) => (
  <S.Container>
    <Header />
    <div>
      {children}
    </div>
    <Footer />
  </S.Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
