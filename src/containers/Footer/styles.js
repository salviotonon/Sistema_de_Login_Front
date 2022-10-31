import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.slate[900]};
  padding: 6.4rem 0;

  h3 {
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    padding: 3.2rem 0;
  }
`;
