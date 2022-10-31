import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  img {
    width: 128px;
    height: 128px;
    border-radius: 64px;

    margin-top: 20vh;
    margin-bottom: 3.2rem;
  }

  h1 {
    margin-bottom: 0.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors.slate[200]};
  }

  button {
    margin-top: 6.4rem;
  }

`;
