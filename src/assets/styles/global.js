import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {

    ${({ theme }) => css`

      font-family: ${theme.font};
      color: ${theme.colors.white};
      background-color: ${theme.colors.slate[700]};

      button {
        cursor: pointer;
      }

      h1 {
        font-size: ${theme.size.h1};
      }

      h2 {
        font-size: ${theme.size.h2};
      }

      h3 {
        font-size: ${theme.size.h3};
      }

      p, span, a {
        font-size: ${theme.size.medium};
      }

      small {
        font-size: ${theme.size.small};
      }
    `};
  }


`;
