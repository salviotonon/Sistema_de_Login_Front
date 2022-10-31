import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0;

  h1 {
    margin-bottom: 0.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors.slate[200]};
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin-top: 3.6rem;
  }
`;
