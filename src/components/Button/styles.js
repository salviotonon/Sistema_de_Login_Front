import styled, { css } from 'styled-components';

const variants = {
  main: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue[400]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue[300]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.blue[200]};
    }
  `,

  secondary: css`
    color: ${({ theme }) => theme.colors.gray[700]};
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray[300]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.gray[700]};
    }
  `,

  danger: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red[400]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.red[300]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.red[200]};
    }
  `,
};

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button, a {
    display: flex;
    justify-content: center;
    height: 40px;


    color: inherit;
    font-size: inherit;
    font-weight: inherit;

    padding: 1.2rem 1.6rem;
    border-radius: 6px;

    font-size: ${({ theme }) => theme.size.medium};
    font-weight: 700;

    transition-property: color, background-color;
    transition: ${({ theme }) => theme.animations.shortDuration} ease-in-out;

    ${({ variant }) => variants[variant || 'main']};

    &[disabled] {
      color: ${({ theme }) => theme.colors.slate[600]};
      background-color: ${({ theme }) => theme.colors.slate[800]};
      cursor: default;
    }
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: 0;
  }
`;
