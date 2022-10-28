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
    ExtraText,
    TextLink,
    colors

} from "../components/Styles";

//spinner
import BeatLoader from "react-spinners/BeatLoader";



import AvatarImg from "../assets/images/salvioton.jpg"

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup"

//icons
import { Eye, EyeSlash } from "phosphor-react"

export const Login = () => {
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
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                    }}
                >
                    {({isSubmitting}) => (
                        <form onSubmit={isSubmitting.handleform}>
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
                                icon={<Eye />}
                            />
                            <StyledContainerSpanLink>
                                <TextLink to="/Signup" size={13}>Não possui conta?</TextLink>
                                <TextLink to="/Signup" size={13}>Esqueceu sua senha?</TextLink>
                            </StyledContainerSpanLink>
                            {!isSubmitting && <StyledButton type="submit">
                            Entrar
                            </StyledButton>}
                            {isSubmitting && (
                                <BeatLoader
                                    color={colors.gray300}
                                    size={20}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            )}
                        </form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}