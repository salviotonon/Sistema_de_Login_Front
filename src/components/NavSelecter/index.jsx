import PropTypes from 'prop-types';

import * as S from './styles';

export const NavSelecter = ({
  to, selected, icon, children,
}) => {
  const IconComponent = icon;

  return (
    <S.LinkStyled to={to} selected={selected}>
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

      {!selected && (
        <S.BorderBottom />
      )}
    </S.LinkStyled>
  );
};

NavSelecter.propTypes = {
  to: PropTypes.any.isRequired,
  selected: PropTypes.bool,
  icon: PropTypes.object,
  children: PropTypes.node.isRequired,
};

NavSelecter.defaultProps = {
  icon: undefined,
  selected: false,
};
