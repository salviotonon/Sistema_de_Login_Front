import { StyledTitle, StyledSubTitle,StyledContainerCard, Avatar } from "../components/Styles";

import AvatarImg from "../assets/frontend salvioton.jpg"
const Home = () => {
    return(
        <div>
            <div>
                <Avatar image={AvatarImg} />
            </div>
            <StyledContainerCard>
                <StyledTitle size={24}>
                    Login
                </StyledTitle>
                 <StyledSubTitle size={16}>
                    Faça login para continuar
                </StyledSubTitle>
            </StyledContainerCard>
        </div>
    )
}

export default Home;