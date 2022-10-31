import styled from 'styled-components';

import * as SignOutStyles from '../dynamicIcons/SignOut/styles';

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  font-weight: 600;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.slate[200]};
  border: none;
  outline: 0;
  background-color: transparent;

  ${SignOutStyles.Container} {
    svg {
      transition: transform 0.2s ease-in-out;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};

    ${SignOutStyles.Container} {

      svg {
        transform: scale(120%);

        &:nth-child(2) {
          transform: translateX(0.6rem);
        }
      }
    }
  }

`;
