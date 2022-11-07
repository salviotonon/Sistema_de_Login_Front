import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { filesize } from 'filesize';

import { Button } from '../Button';
import { DropZoneModal } from './DropZoneModal';

export const DropZone = ({ labelButton }) => {
  const [fileUploaded, setFileUploaded] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleUpload = useCallback((file) => {
    setFileUploaded({
      file,
      id: uniqueId(),
      name: file[0].name,
      readableSize: filesize(file[0].size, { base: 2, standard: 'jedec' }),
      preview: URL.createObjectURL(file[0]),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    });

    // https://www.youtube.com/watch?v=G5UZmvkLWSQ&ab_channel=Rocketseat
  }, []);

  return (
    <>
      <Button
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {labelButton}
      </Button>
      <DropZoneModal
        isOpen={isOpen}
        onClose={handleClose}
        onUpload={handleUpload}
        file={fileUploaded}
      />
    </>
  );
};

DropZone.propTypes = {
  labelButton: PropTypes.string.isRequired,
};
