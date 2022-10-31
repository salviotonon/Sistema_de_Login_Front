import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ;
  justify-content: space-between;

  padding: 2.4rem 3.2rem;
  background-color: ${({ theme }) => theme.colors.slate[900]};

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

      #avatar {
        width: 4.4rem;
        height: 4.4rem;
      }
    }
  }
`;
