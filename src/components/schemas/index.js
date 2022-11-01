import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?.*[A-Z].{5,}$);

//min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export basicSchema = yub.object().shape({
    email: yup.string().email("Por favor entre com um email válido").required("Obrigatório"),
    password: yup.string().min(5).matches(passwordRules, {message: "Por favor crie uma senha forte"}).required,
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais").required("Obrigatório")
})