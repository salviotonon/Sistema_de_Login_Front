import styled from 'styled-components';

import * as InputStyles from '../../components/Input/styles'


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
    padding: 2.8rem 3.2rem;
}
.box-label-button{
    display: flex;
    gap: 3.2rem;
    margin-bottom: 2.8rem;
}

#app-btn {
      width: 40rem;
    }

.subtitle {
      margin-top: 0.8rem;
      padding-bottom: 3.6rem;
      color: ${({ theme }) => theme.colors.slate[200]};
}`;

export const StyledForm = styled.form`
    margin-top: 3.6rem;
    width: 100%;
    margin-bottom: 1.6rem;

    ${InputStyles.InputGroup} + ${InputStyles.InputGroup} {
    margin-top: 1.6rem;

    span svg {
        cursor: pointer;
    }
    .show-password{
        cursor: pointer;
    }

}`;

export const EmptyFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.slate[900]};
  height: 6.4rem;
`;



