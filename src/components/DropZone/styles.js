import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.overlay};
  backdrop-filter: ${({ theme }) => theme.overlayBlur};
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${({ theme }) => theme.colors.slate[800]};
  border-radius: 8px;

  width: 46rem;
  padding: 2rem 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  span {
    text-align: center;

    strong {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }

  .actions {

    #cancel-btn {
      color: ${({ theme }) => theme.colors.gray[300]};
      margin-top: 1.2rem;

      &::after {
        background-color: ${({ theme }) => theme.colors.gray[300]};
      }
    }
  }
`;

const variants = {
  active: css`
    border-color: ${({ theme }) => theme.colors.green[500]};
    color: ${({ theme }) => theme.colors.green[500]};
  `,
  reject: css`
    border-color: ${({ theme }) => theme.colors.red[400]};
    color: ${({ theme }) => theme.colors.red[400]};
  `,
};

export const DropContainer = styled.div`
  padding: 2rem;
  width: 100%;
  cursor: pointer;

  border-radius: 4px;
  border: 2px dashed ${({ theme }) => theme.colors.gray[300]};
  color: ${({ theme }) => theme.colors.gray[300]};

  transition: height 0.2s ease-in-out;

  ${({ isDragActive }) => isDragActive && variants.active}
  ${({ isDragReject }) => isDragReject && variants.reject}

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FileAboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 0.8rem 1.2rem;

  background-color: ${({ theme }) => theme.colors.slate[700]};
  border-radius: 8px;

  #success-upload {
    color: ${({ theme }) => theme.colors.green[500]};
  }

  #error-upload {
    color: ${({ theme }) => theme.colors.red[400]};
  }
`;

export const FileAboutInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.2rem;
      color: #999;
      margin-top: 0.6rem;

      button {
        border: 0;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.red[400]};
        margin-left: 0.6rem;
        cursor: pointer;
      }
    }
  }
`;

export const FileAboutPreview = styled.img`
  margin-right: 1.2rem;
  border-radius: 240px;

  width: 4.8rem;
  height: 4.8rem;
`;
