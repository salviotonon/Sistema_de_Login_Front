import { CircularProgressbar } from 'react-circular-progressbar';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../Text';

import * as S from './styles';

export const FileAbout = ({ file }) => {
  const theme = useTheme();

  return file && (
    <S.FileAboutContainer>
      <S.FileAboutInfo>
        <S.FileAboutPreview src={file.preview} />
        <div>
          <strong>{file.name}</strong>
          <span>
            {file.readableSize}
            {' '}
            {!!file.url && (
              <button type="button" onClick={() => {}}>
                Excluir
              </button>
            )}
          </span>
        </div>
      </S.FileAboutInfo>

      <div>
        {!file.uploaded && !file.error && (
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: theme.colors.blue[400] },
            }}
            strokeWidth={10}
            percentage={file.progress}
          />
        )}

        {file.uploaded && <Text id="success-upload">Êxito no upload</Text>}
        {file.error && <Text id="error-upload">Erro no upload</Text>}
      </div>
    </S.FileAboutContainer>
  );
};

FileAbout.propTypes = {
  file: PropTypes.any,
};

FileAbout.defaultProps = {
  file: null,
};
