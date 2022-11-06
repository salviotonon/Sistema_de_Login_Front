import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BorderBottom = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  height: 1px;
  width: 0;
  margin-top: 1px;

  transition: width 0.2s ease-in-out;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: fit-content;

  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray[300]};

  &.active {
    color: ${({ theme }) => theme.colors.white};
    cursor: default;

    svg {
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }

  &:not(.active) {
    &:hover {
      color: ${({ theme }) => theme.colors.white};

      ${BorderBottom} {
        width: 100%;
      }
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
