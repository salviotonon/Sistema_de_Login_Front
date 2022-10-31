import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 0.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors.slate[200]};
  }

  button {
    margin-top: 3.6rem;
  }

`;
