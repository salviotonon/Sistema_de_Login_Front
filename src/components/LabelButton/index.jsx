import PropTypes from 'prop-types';

import * as S from './styles';

export const LabelButton = ({
  defaultAnchor, to, disabled, children, ...props
}) => {
  const Component = defaultAnchor ? S.AnchorStyled : S.LinkStyled;

  return (
    <Component
      href={defaultAnchor ? to : undefined}
      to={defaultAnchor ? undefined : to}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

LabelButton.propTypes = {
  defaultAnchor: PropTypes.bool,
  to: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

LabelButton.defaultProps = {
  defaultAnchor: false,
  disabled: false,
};
