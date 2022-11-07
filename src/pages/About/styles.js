import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("../../../public/Icons.png");
    background-repeat: no-repeat;
    background-position: center;
    max-width: 1100px;
    padding-top: 3rem;
    margin: 0 auto;
    height: 70vh;

    
    h2{
        text-align: center;
        margin-bottom: 8.4rem;
    }
    .subtitle {
        text-align: center;
        max-width: 125ch;
        margin: 0 auto;
        line-height: 3.8rem;

    }
    #app-btn {
        margin-top: 2rem;
        width: 350px;

    }
     
`;

export const ContainerCarrousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  ${({ theme }) => theme.colors.slate[800]};
    height: 40vh;
`;