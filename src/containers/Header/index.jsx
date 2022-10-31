import { NavLink } from '../NavLink';
import * as S from './styles';

export const Header = () => (
  <S.Container>
    <div className="logo-and-nav">
      <h1 id="logo">
        Equipe 3
      </h1>
      <NavLink />
    </div>
  </S.Container>
);
