import React, { ReactNode, useState } from 'react';
import Modal from 'react-modal';
import { CloseButtonS, modalStyles } from 'src/common/modal/modal.style';
import * as S from 'src/styles/styled';
import them from 'src/styles/them';

interface ModalLayoutProps {
  children: ReactNode;
  buttonName: string;
}

function ModalLayout(props: ModalLayoutProps) {
  const { children, buttonName } = props;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <S.Button color={them.color.yellowGreen} onClick={openModal}>
        {buttonName}
      </S.Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal">
        <CloseButtonS onClick={closeModal}>X</CloseButtonS>
        {children}
      </Modal>
    </>
  );
}

export default ModalLayout;
