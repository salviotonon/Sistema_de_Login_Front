import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.slate[900]};
  height: 84px;

  .fixed-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    max-width: 1440px;
    margin: auto;
    padding: 1.6rem 2.8rem;

    .logo-and-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3.6rem;
    }

    .profile-and-logout {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.6rem;


      #btn-avatar {
        border: 2px solid transparent;
        border-radius: 8.8rem;
        overflow: hidden;

        transition-property: border-color, transform;
        transition: 0.2s ease-in-out;

        &:hover {
          border-color: ${({ theme }) => theme.colors.blue[400]};
          transform: scale(105%);
        }
      }
    }
  }
`;
