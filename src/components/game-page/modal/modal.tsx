// Modal.tsx
import React from 'react';
import { ModalOverlay, ModalContent } from './modal.styled';



interface ModalProps {
  onClose: () => void;
  imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, imageUrl }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <img src={imageUrl} alt="Fullscreen" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
