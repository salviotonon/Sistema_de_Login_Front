import {
    StyledTitle,
    StyledSubTitle,
    Avatar,
    StyledButton,
    StyledFormArea,
    StyledLabel,
    StyledTextInput,
    StyledSpanLink,
    StyledContainerSpanLink,
    
} from "../components/Styles";

import AvatarImg from "../assets/frontend salvioton.jpg"

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup"

//icons
import {Eye, EyeSlash} from "phosphor-react"

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
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Email inválido")
                            .required(""),
                            password: Yup.string().min(4, "Senha é muito curta").required("")
                        })
                    }
                    onSubmit={() =>{
                        console.log(values);
                    }}
                >
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
                                icon={<Eye/>}
                            />
                        </form>
                    )}
                </Formik>
                <StyledContainerSpanLink>
                    <StyledSpanLink size={13}>Não possui conta?</StyledSpanLink>
                    <StyledSpanLink size={13}>Esqueceu sua senha?</StyledSpanLink>
                </StyledContainerSpanLink>
                <StyledButton type="submit">Entrar</StyledButton>
            </StyledFormArea>
        </div>
    )
}

export default Home;