import styled from "styled-components"

//react router
import {Link} from "react-router-dom"

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
    red: "red"

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
    margin-bottom: 8px;
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

export const StyledButton = styled(Link)`
    padding: 12px 16px;
    width: 400px;
    background-color: ${colors.blue400};
    font-size: 14px;
    border: none;
    border-radius: 6px;
    color: ${colors.white};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    
`;
//Input

export const StyledTextInput = styled.input`
    padding: 15px;
    font-size: 17px;
    letter-spacing: 1px;
    outline: 0;
    color: ${colors.gray300};
    border: 0;
    border-radius: 6px;
    display: block;
    margin: 0;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.gray300};`}

    &:focus {
        background-color: ${colors.slate700};
        color: ${colors.gray300}
    }
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    margin: 0.5rem 0;
    color: ${colors.white}
`; 

export const StyledFormArea = styled.div`
    background-color: ${colors.slate800};
    text-align: center;
    padding: 1px 15px;
    border-radius: 12px;
    width: 464px;
    height: 458px;
`;

export const StyledFormButton = styled.button`
    padding: 12px 16px;
    width: 400px;
    background-color: ${colors.blue400};
    font-size: 14px;
    border: none;
    border-radius: 6px;
    color: ${colors.white};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    
`;

