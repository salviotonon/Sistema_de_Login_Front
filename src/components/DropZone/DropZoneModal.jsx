import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { useCallback } from 'react';
import { Text } from '../Text';
import { LabelButton } from '../LabelButton';
import { ReactPortal } from '../ReactPortal';
import { FileAbout } from './FileAbout';

import * as S from './styles';

export const DropZoneModal = ({
  isOpen, onClose, onUpload, file,
}) => {
  if (!isOpen) {
    return null;
  }

  const getDragMessage = useCallback((isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <Text>Arraste e solte alguma imagem aqui</Text>;
    }

    if (isDragReject) {
      return <Text>Esse tipo de arquivo não é válido!</Text>;
    }

    return <Text>Solte o arquivo</Text>;
  }, []);

  return (
    <ReactPortal containerId="modal-root">
      <S.Overlay onClick={() => onClose()} />
      <S.ModalContainer>
        <Text size="large">
          Arraste uma imagem no dropzone abaixo ou clique em
          {' '}
          <strong>procurar</strong>
          {' '}
          para escolher manualmente.
        </Text>

        <Dropzone accept="image/*" onDropAccepted={onUpload}>
          {({
            getRootProps, getInputProps, isDragActive, isDragReject,
          }) => (
            <S.DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />

              {getDragMessage(isDragActive, isDragReject)}
            </S.DropContainer>
          )}
        </Dropzone>

        <FileAbout file={file} />

        <div className="actions">
          <LabelButton
            id="cancel-btn"
            type="button"
            onClick={() => onClose()}
          >
            Cancelar
          </LabelButton>
        </div>
      </S.ModalContainer>
    </ReactPortal>
  );
};

DropZoneModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
};

DropZoneModal.defaultProps = {
  isOpen: false,
};
