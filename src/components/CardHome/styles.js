import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.slate[800]};
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
  margin: auto;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    #avatar {
        max-width: 317px;
        max-height:317px;
        overflow: hidden;
    }
    #avatar img {
        width: 100%;
    }

    .subtitle {
      margin-top: 0.8rem;
      color: ${({ theme }) => theme.colors.orange[200]};
    }
    .link-email {
        color: ${({ theme }) => theme.colors.gray[300]};
    }
    .linkedin-logo {
        width: 50px;
    }

    .sub-actions {
      margin-top: 1.6rem;

      display: flex;
      justify-content: center;
    }
    .actions {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2.4rem;

      button {
        width: 100%;
      }
    }
  }

`;

export const EmptyFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.slate[900]};
  height: 6.4rem;
`;

export const SocialMidia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 0.8rem;
`;
