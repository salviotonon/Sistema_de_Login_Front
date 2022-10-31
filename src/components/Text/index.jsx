import { Slot } from '@radix-ui/react-slot';
import PropTypes from 'prop-types';

import * as S from './styles';

export const Text = ({ size, children, asChild }) => {
  const Component = asChild ? Slot : 'span';

  return (
    <S.Container size={size}>
      <Component>
        {children}
      </Component>
    </S.Container>
  );
};

Text.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
};

Text.defaultProps = {
  size: 'medium',
  asChild: false,
};
