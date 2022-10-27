import styled from "styled-components"

export const colors = {
    ffPrimary: "'Inter', sans-serif",

    slate900: "#161619",
    slate800: "#1A1B21",
    slate700: "#23252C",
    slate600: "#505460",
    slate200: "#b9bcc6",

    gray300: "#9CA3AF",
    blue400: "#5093e2",
    orange200: "#f3bf99",
    white: "#FFFF",

}
//styled components

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.slate700};

`;

// Home 

export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.white};
    padding: 5px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.gray300};
    padding: 5px;
    margin-bottom: 25px;
    font-weight: 400;
`;

export const StyledContainerCard = styled.div`
    display: flex;
    width: 318px;
    height: 657px;
    background-color: ${colors.slate700};
    flex-direction: column;
`;

export const Avatar = styled.div`
    width: 61px;
    height: 57px;
    border-radius: 50px;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center;
    margin: auto;
`;
