import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

    @media (max-width: 768px) {
    flex-direction: row; /* Стрелки и карточки остаются в одну линию */
    justify-content: space-between;
    gap: 5px;
  }
`;

export const GalleryMain = styled.div`
  display: flex;
  transition: transform 1s ease;
  overflow: hidden;
  width: 100%; // Устанавливаем ширину для ограничения области видимости

    @media (max-width: 768px) {
    width: 100%; /* На мобильных делаем ширину на всю */
    overflow-x: auto; /* Добавляем горизонтальную прокрутку */
    scroll-snap-type: x mandatory; 
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
  }
`;

interface ArrowButtonProps {
  img: string;
}

export const ArrowLeftMain = styled.button<ArrowButtonProps>`
  margin-right: 10px;
  height: 80px;
  width: 50px;

  background: none;
  border: none;
  outline: none;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  background-size: calc(95%) calc(95%); /* Размер изображения с учетом отступов */
  background-repeat: no-repeat; /* Отключение повторения фона */

  &:hover {
    filter: brightness(1.2);
  }
  
   @media (max-width: 768px) {
    height: 50px;
    width: 35px;
  }
`;

export const ArrowRightMain = styled.button<ArrowButtonProps>`
  margin-left: 10px;
  height: 80px;
  width: 50px;

  background: none;
  border: none;
  outline: none;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  background-size: calc(95%) calc(95%); /* Размер изображения с учетом отступов */
  background-repeat: no-repeat; /* Отключение повторения фона */

  &:hover {
    filter: brightness(1.2);
  }
    @media (max-width: 768px) {
    height: 50px;
    width: 35px;
  }
`;
