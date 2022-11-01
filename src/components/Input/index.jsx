import PropTypes from 'prop-types';
import { useState } from "react"

import * as S from './styles';

export const Input = ({
  labelName, icon, errorFeedback, iconShowPassword, iconHiddenShowPassword, ...props
}) => {

  const IconComponent = icon;
  const IconShowPasswordComponent = iconShowPassword;
  const IconHiddenPasswordComponent = iconHiddenShowPassword;

  const [show, setShow] = useState(true);

  return (
    <S.InputGroup>
      {labelName && (
        <S.InputLabel hasError={!!errorFeedback}>
          {labelName}
        </S.InputLabel>
      )}

      <S.InputBoxContainer hasError={!!errorFeedback}>
        {icon && (
          <S.InputIcon>
            <IconComponent />
          </S.InputIcon>
        )}
        {props.type === "password" && (
          <S.InputStyled 
          {...props}
          type={show ? "password" : "text"}
           />
          )}
          {props.type !== "password" && <S.InputStyled {... props}/>}
  
        {props.type === "password" && (
          <S.InputIcon onClick={() => setShow(!show)}>
            {show && <IconShowPasswordComponent />}
            {!show && <IconHiddenPasswordComponent />}
          </S.InputIcon>
        )}

      </S.InputBoxContainer>
      {errorFeedback && (
        <S.InputErrorFeedback>
          {errorFeedback}
        </S.InputErrorFeedback>
      )}
    </S.InputGroup>
  );
};

Input.propTypes = {
  labelName: PropTypes.string,
  icon: PropTypes.object,
  errorFeedback: PropTypes.string,
};

Input.defaultProps = {
  labelName: undefined,
  icon: undefined,
  errorFeedback: undefined,
};
