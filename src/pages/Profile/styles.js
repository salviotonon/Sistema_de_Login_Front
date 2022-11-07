import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: fit-content;

  margin: auto;
`;

export const BottomContainer = styled.main`
  display: flex;
  gap: 3.2rem;
`;

export const AsideContainer = styled.aside`

  nav {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const SectionContainer = styled.section`
  width: 56rem;
  padding: 2rem 2rem;
  background-color: ${({ theme }) => theme.colors.slate[800]};

  border-radius: 8px;
`;
