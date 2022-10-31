import PropTypes from 'prop-types';

import * as S from './styles';

export const Input = ({
  labelName, icon, errorFeedback, ...props
}) => {
  const IconComponent = icon;

  return (
    <S.InputGroup>
      {labelName && (
        <S.InputLabel>
          {labelName}
        </S.InputLabel>
      )}

      <S.InputBoxContainer>
        {icon && (
          <IconComponent />
        )}
        <S.InputStyled {...props} />

      </S.InputBoxContainer>
      {errorFeedback && (
        <S.errorFeedback>
          {errorFeedback}
        </S.errorFeedback>
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
