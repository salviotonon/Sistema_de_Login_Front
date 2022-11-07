import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.4rem;
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
