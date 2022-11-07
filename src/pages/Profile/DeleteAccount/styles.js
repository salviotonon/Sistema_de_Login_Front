import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.4rem;

  #warn {
    font-weight: 500;
    text-align: center;
    width: 80%;

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.red[400]};
    }
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .actions {
    margin-top: 0.8rem;

    display: flex;

    #app-btn {
      width: fit-content;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 3.2rem;

  align-items: center;
  justify-content: flex-end;
`;
