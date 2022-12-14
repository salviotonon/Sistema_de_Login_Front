import styled from 'styled-components';

import * as InputStyles from '../../components/Input/styles';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.slate[800]};
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
  margin: auto;
  margin-bottom: 1rem;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 3.0rem;

    .subtitle {
      margin-top: 0.8rem;
      color: ${({ theme }) => theme.colors.slate[200]};
    }

    .sub-actions {
      margin-top: 1.6rem;

      display: flex;
      justify-content: center;

      a + a {
        margin-left: 3.2rem;
      }
    }

    .actions {
      margin-top: 2.4rem;

      button {
        width: 100%;
      }
    }
  }

`;

export const FormStyled = styled.form`
  margin-top: 3.6rem;
  width: 100%;

  ${InputStyles.InputGroup} + ${InputStyles.InputGroup} {
    margin-top: 1.6rem;
  }
`;

export const EmptyFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.slate[900]};
  height: 6.4rem;
`;
