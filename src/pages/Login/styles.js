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
}

    padding: 2.8rem 3.2rem;
.subtitle {
      margin-top: 0.8rem;
      color: ${({ theme }) => theme.colors.slate[200]};
}
`;