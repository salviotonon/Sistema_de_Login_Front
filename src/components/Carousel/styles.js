import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;

    img {
        width: 100%;
        height: 150px;
        border-radius: 12px;
        object-fit: cover;
        object-position: center;
        margin-top: 2rem;
    }
`;

export const ContainerImg = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto,;
`;

