import { Slot } from '@radix-ui/react-slot';

import * as S from './styles';

export const Text = ({ setFontSize, children, asChild }) => {
  const Component = asChild ? Slot : 'span' ;

  return (
    <S.Container setFontSize={setFontSize}>
      <Component>
        {children}
      </Component>
    </S.Container>
  );
};