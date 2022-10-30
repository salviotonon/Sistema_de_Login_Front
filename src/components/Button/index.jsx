import * as S from './styles';

export const Button = ({ children, ...props }) => {
  return (
    <S.StyledButton
      {...props}
    >
      {children}
    </S.StyledButton>
  );
};