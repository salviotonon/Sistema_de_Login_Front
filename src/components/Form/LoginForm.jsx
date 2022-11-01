import { User, LockKey, EyeSlash, Eye} from 'phosphor-react';
import { useFormik } from "formik"

import * as S from "../Input/styles"

export const LoginForm = () => {
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            password: "",
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <S.InputGroup>
                    <S.InputLabel>Login</S.InputLabel>
                    <S.InputBoxContainer>
                        <S.InputIcon />
                        <S.Input
                            name='username'
                            type="text"
                            labelName="Nome do usuário"
                            icon={User}
                            placeholder="Digite seu nome de usuário"
                        />
                    </S.InputBoxContainer>
                </S.InputGroup>
            </form>
        </div>
    )
}