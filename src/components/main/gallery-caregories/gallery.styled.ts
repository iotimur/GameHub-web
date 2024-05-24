import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

export const GalleryMain = styled.div`
  display: flex;
  transition: transform 1s ease;
  overflow: hidden;
  width: 100%; // Устанавливаем ширину для ограничения области видимости

  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
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

  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
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
`;
