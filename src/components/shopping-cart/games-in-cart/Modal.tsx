import React from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  ModalText,
  ModalButtonsContainer,
  ModalButton,
} from "./games.styled";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // Добавляем проп для подтверждения удаления
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>Вы уверены?</ModalTitle>
        <ModalText>Вы действительно хотите удалить этот товар из корзины?</ModalText>
        <ModalButtonsContainer>
          <ModalButton onClick={onClose}>Отмена</ModalButton>
          <ModalButton primary onClick={onConfirm}>
            Да, удалить
          </ModalButton>
        </ModalButtonsContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;