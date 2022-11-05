import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const style = css`
  display: inline-block;
  color: ${({ theme }) => theme.colors.orange[200]};
  text-decoration: none;

  ${({ disabled }) => disabled && css`
    pointer-events: none;


    opacity: 0.5;
  `}

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;

    margin-top: 2px;

    background-color: ${({ theme }) => theme.colors.orange[200]};
    transition: width 0.2s ease-in-out;
  }
`;

export const LinkStyled = styled(Link)`
  ${() => style};
`;

export const AnchorStyled = styled.a`
  ${() => style};
`;
