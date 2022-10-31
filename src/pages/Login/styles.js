import styled from 'styled-components';

import * as InputStyles from '../../components/Input/styles'


export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.slate[800]};
    border-radius: 12px;
    overflow: hidden;
    width: fit-content;
    margin: auto;
    padding: 2.8rem 3.2rem;

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.box-label-button{
    display: flex;
    gap: 3.2rem;
    margin-bottom: 2.8rem;
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

}`;


