import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 4rem;
    max-width: 1100px;
    margin: 0 auto;
`;
export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    
    #avatar{
        max-width: 250px;
        height: 334px;
        object-fit: cover;
    }
    .actions {
        display: flex;
        padding-top: 5.5rem;
        justify-content: space-between;
    }
   
`;
export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4.3rem;

 
`;
export const TitleBox2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 5rem;
    margin-bottom: 4.3rem;

    h3 {
        padding: 1.5rem 0;
    }
`;
export const ContainerText = styled.div`
    background-color: ${({ theme }) => theme.colors.slate[800]};
    padding-top: 1rem;

     .subtitle {
        padding 1rem 9.5rem;
     }
`;
export const SocialMidia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1rem;
    padding: 0;
    margin: 0;

    .colorIcon{

        color: ${({theme}) => theme.colors.gray[300]}
    }
`;
export const EmptyFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.slate[900]};
  height: 6.4rem;
`;
