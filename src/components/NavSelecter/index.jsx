import PropTypes from 'prop-types';

import * as S from './styles';

export const NavSelecter = ({
  to, icon, children,
}) => {
  const IconComponent = icon;

  return (
    <S.NavLinkStyled to={to} end className={({ isActive }) => isActive && 'active'}>
      <div className="content">
        {icon && (
          <IconComponent
            weight="bold"
            size={20}
          />
        )}
        <span>
          {children}
        </span>
      </div>

      <S.BorderBottom />
    </S.NavLinkStyled>
  );
};

NavSelecter.propTypes = {
  to: PropTypes.any.isRequired,
  icon: PropTypes.object,
  children: PropTypes.node.isRequired,
};

NavSelecter.defaultProps = {
  icon: undefined,
};
