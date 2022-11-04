import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const ToastContainerStyled = styled(ToastContainer)`

  .Toastify__toast-body {
    ${({ appTheme: theme }) => css`
      font-family: ${theme.font};
      font-size: ${theme.size.medium};
    `}
  }

`;
