import PropTypes from 'prop-types';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import * as S from './styles';

export const Input = ({
  labelName, icon, rightIcon, onRightIconClick, errorFeedback, ...props
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

  const handleBlurInput = useCallback(() => {
    if (isInputBoxHovered.current) {
      inputRef.current.focus();
      return;
    }

    setIsInputFocused(false);
  }, [isInputFocused]);

  useEffect(() => {
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
  }, [inputBoxRef]);

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
        <S.InputLabel hasError={!!errorFeedback}>
          {labelName}
        </S.InputLabel>
      )}

      <S.InputBoxContainer
        role="button"
        ref={inputBoxRef}
        hasError={!!errorFeedback}
        isFocused={isInputFocused}
        onClick={handleFocusInput}
        onBlur={handleBlurInput}
        onMouseDown={() => {
          // event.preventDefault();
          handleFocusInput();
        }}
      >
        {icon && (
          <S.InputIcon>
            <IconComponent />
          </S.InputIcon>
        )}
        <S.InputStyled ref={inputRef} {...props} />
        {rightIcon && (
          <S.InputIcon id="right-icon" hasAction={!!onRightIconClick}>
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
};

Input.defaultProps = {
  labelName: undefined,
  icon: undefined,
  rightIcon: undefined,
  onRightIconClick: undefined,
  errorFeedback: undefined,
};
