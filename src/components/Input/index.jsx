import PropTypes from 'prop-types';

import * as S from './styles';

export const Input = ({
  labelName, icon, errorFeedback, ...props
}) => {
  const IconComponent = icon;

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
        <S.InputStyled {...props} />

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
