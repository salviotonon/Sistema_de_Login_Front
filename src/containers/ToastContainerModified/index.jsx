import { useTheme } from 'styled-components';

import * as S from './styles';

export const ToastContainerModified = () => {
  const theme = useTheme();

  return (
    <S.ToastContainerStyled
      position="bottom-center"
      autoClose={5000}
      hideProgressBar
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      theme="colored"
      appTheme={theme}
    />
  );
};
