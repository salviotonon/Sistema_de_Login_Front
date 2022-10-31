import { Slot } from '@radix-ui/react-slot';
import PropTypes from 'prop-types';

import * as S from './styles';

export const Button = ({
  variant, children, asChild, ...props
}) => {
  const Component = asChild ? Slot : S.StyledButton;

  return (
    <Component
      variant={variant}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['main', 'secondary', 'danger']),
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'main',
  asChild: false,
};
