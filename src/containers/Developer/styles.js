import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 1.2rem;
  left: -2rem;

  padding: 1.2rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.slate[600]};
  border-radius: 12px;

  z-index: 15;

  transform: scale(90%);

  ul {
    li + li {
      margin-top: 0.8rem;
    }
  }
`;
