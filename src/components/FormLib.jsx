import { useState } from "react"
import { ErrorMessage, useField } from "formik";
import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMsg
} from "./../components/Styles"

import { EyeSlash, Eye } from "phosphor-react"

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false)

    return (
        <div style={{ position: "relative" }}>

            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            {props.type !== "password" && <StyledTextInput
                {...field}
                {...props}
            />}
            {
                props.type === "password" && (<StyledTextInput
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                />)
            }
            {
                props.type === "password" &&
                <StyledIcon
                    onClick={() => setShow(!show)} right>
                    {show && <Eye />}
                    {!show && <EyeSlash />}
                </StyledIcon>
            }
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
                ): (
                    <ErrorMsg style={{visibility: "hidden"}}></ErrorMsg>
                )
                }
        </div>
    )
}