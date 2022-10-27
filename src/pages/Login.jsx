import {
    StyledTitle,
    StyledSubTitle,
    Avatar,
    StyledButton,
    StyledFormArea,
    StyledLabel,
    StyledTextInput,
    StyledSpanLink
} from "../components/Styles";

import AvatarImg from "../assets/frontend salvioton.jpg"

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";

const Home = () => {
    return (
        <div>
            <StyledFormArea>
                <StyledTitle size={24}>
                    Login
                </StyledTitle>
                <StyledSubTitle size={16}>
                    Faça login para continuar
                </StyledSubTitle>
                <Formik>
                    {() => (
                        <form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Nome do usuário"
                                placeholder="Digite seu nome de usuário"
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Senha"
                                placeholder="*********"
                            />
                        </form>
                    )}
                </Formik>
                <div>
                    <StyledSpanLink size={13}>Não possui conta?</StyledSpanLink>
                    <StyledSpanLink size={13}>Esqueceu sua senha?</StyledSpanLink>
                </div>
                <StyledButton type="submit">Entrar</StyledButton>
            </StyledFormArea>
        </div>
    )
}

export default Home;