import styled, { css } from 'styled-components';

export const InputGroup = styled.div`
  width: fit-content;
`;

export const InputLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.4rem;

  font-size: ${({ theme }) => theme.size.small};
  font-weight: 500;

  ${({ theme, hasError }) => hasError && css`
    color: ${theme.colors.red[400]};

    &::after {
      content: " !";
    }
  `};
`;

export const InputBoxContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.slate[600]};
  border-radius: 8px;
  padding: 1.2rem 1.2rem;
  width: 400px;
  height: 50px;
  border: 2px solid transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;

  cursor: text;

  ${({ theme, hasError }) => hasError && css`
    border-color: ${theme.colors.red[400]} !important;
  `}

  ${({ theme, isFocused }) => isFocused && css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[700]};
  `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.blue[200]};
  }

  `;

export const InputIcon = styled.span`
  svg {
    width: 2.6rem;
    height: 2.6rem;

  }

  &#right-icon {
    color: ${({ theme }) => theme.colors.gray[300]};

    ${({ hasAction }) => hasAction && css`
      &:hover {
        cursor: pointer;
      }
    `}
  }
`;

export const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  outline: 0;
  color: inherit;
  font-weight: 500;
  font-size: ${({ theme }) => theme.size.medium};

  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: ${({ theme }) => theme.size.small};
    font-weight: 500;
    font-family: ${({ theme }) => theme.font};
  }

  &:focus ~ ${InputBoxContainer} {
    color: ${({ theme }) => theme.colors.gray[700]};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const InputErrorFeedback = styled.span`
  display: inline-block;
  margin-top: 0.2rem;

  font-size: ${({ theme }) => theme.size.small};
  font-style: italic;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.red[300]};
`;
