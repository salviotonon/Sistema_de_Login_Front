import PropTypes from 'prop-types';
import {
  useCallback, useEffect, useLayoutEffect, useRef, useState,
} from 'react';

import * as S from './styles';

export const Input = ({
  labelName, icon, rightIcon, onRightIconClick, errorFeedback, disabled, ...props
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputBoxRef = useRef(null);
  const inputRef = useRef(null);
  const isInputBoxHovered = useRef(false);

  const IconComponent = icon;
  const RightIconComponent = rightIcon;

  const handleFocusInput = useCallback(() => {
    setIsInputFocused(true);
  }, [isInputFocused]);

  const handleBlurInput = useCallback((event) => {
    if (isInputBoxHovered.current && !event.relatedTarget) {
      inputRef.current.focus();
      return;
    }

    setIsInputFocused(false);
  }, [isInputFocused]);

  useLayoutEffect(() => {
    function handleHoverInputBox() {
      isInputBoxHovered.current = true;
    }

    function handleStopHoverInputBox() {
      isInputBoxHovered.current = false;
    }

    inputBoxRef.current.addEventListener('mouseenter', handleHoverInputBox);
    inputBoxRef.current.addEventListener('mouseleave', handleStopHoverInputBox);

    return () => {
      inputBoxRef.current.removeEventListener('mouseenter', handleHoverInputBox);
      inputBoxRef.current.removeEventListener('mouseleave', handleStopHoverInputBox);
    };
  }, []);

  useEffect(() => {
    if (isInputFocused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isInputFocused]);

  return (
    <S.InputGroup>
      {labelName && (
        <S.InputLabel hasError={!!errorFeedback} disabled={disabled}>
          {labelName}
        </S.InputLabel>
      )}

      <S.InputBoxContainer
        role="textbox"
        tabIndex={0}
        ref={inputBoxRef}
        hasError={!!errorFeedback}
        isFocused={isInputFocused}
        onFocus={handleFocusInput}
        onClick={handleFocusInput}
        onBlur={handleBlurInput}
        onMouseDown={() => {
          handleFocusInput();
        }}
        disabled={disabled}
      >
        {icon && (
          <S.InputIcon>
            <IconComponent />
          </S.InputIcon>
        )}
        <S.InputStyled ref={inputRef} disabled={disabled} {...props} />
        {rightIcon && (
          <S.InputIcon id="right-icon" hasAction={!!onRightIconClick} disabled={disabled}>
            <RightIconComponent onClick={onRightIconClick} />
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
  rightIcon: PropTypes.object,
  onRightIconClick: PropTypes.func,
  errorFeedback: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  labelName: undefined,
  icon: undefined,
  rightIcon: undefined,
  onRightIconClick: undefined,
  errorFeedback: undefined,
  disabled: false,
};
