import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BorderBottom = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  height: 1px;
  width: 0;
  margin-top: 1px;

  transition: width 0.2s ease-in-out;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  width: fit-content;

  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[300]};

  ${({ theme, selected }) => selected && css`
    color: ${theme.colors.white};

    svg {
      color: ${theme.colors.blue[400]};
    }
  `};

  &:hover {
    color: ${({ theme }) => theme.colors.white};

    ${BorderBottom} {
      width: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 0.4rem;
    }
  }
`;
