import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background: radial-gradient(50% 50% at 50% 50%, #171724 0%, #161619 100%);

  z-index: 10;
`;

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  z-index: 11;
`;

export const Header = styled.header`
  position: relative;
  top: 2.8rem;

  user-select: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4rem;

  #message-info {
    cursor: default;
    color: ${({ theme }) => theme.colors.slate[400]};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  width: 100%;

  .by {
    color: ${({ theme }) => theme.colors.slate[700]};
    position: relative;

    left: 1.6rem;
    bottom: 1.6rem;

    display: flex;
    gap: 0.8rem;

    user-select: none;

    .by-list {
      li + li {
        margin-top: 0.4rem;
      }
    }
  }

  .project-info {
    color: ${({ theme }) => theme.colors.slate[600]};
    position: absolute;

    right: 50%;
    transform: translateX(50%);

    bottom: 3.2rem;
  }
`;
