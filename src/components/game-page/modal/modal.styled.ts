import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 0px;
  border-radius: 0px;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  max-width: 920px; /* Устанавливаем максимальную ширину изображения равной ширине контейнера */
  max-height: 600px; /* Устанавливаем максимальную высоту изображения равной высоте контейнера */
`;
