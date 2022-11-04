import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.slate[800]};
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
  margin: auto;

  .content {
    padding: 2.8rem 3.2rem;
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    #subtitle {
      margin: 1.2rem 0 2rem 0;

      display: inline-block;
      text-align: center;

      width: 35rem;
      color: ${({ theme }) => theme.colors.slate[200]}
    }

    #btn-back-login {
      margin-top: 1.2rem;
    }

    #app-btn {
      margin-top: 2.4rem;

      width: 100%;
    }
  }
`;

export const EmptyFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.slate[900]};
  height: 6.4rem;
`;
