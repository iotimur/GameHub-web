import styled from "@emotion/styled";

export const Card = styled.div`
  width: 100%;
  height: 180px;
  background: #18396c;
  display: flex; /* Используем flex для горизонтального расположения */
  align-items: center; /* Выравниваем элементы по вертикали */
  position: relative;
  border: 1px solid #f39a46;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #2e5a99;
    transition: 0.3s;
  }
`;

export const CardImg = styled.img`
  width: 120px; /* Уменьшаем ширину изображения */
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px; /* Добавляем отступ между картинкой и текстом */
`;

export const TitleGame = styled.h3`
  font-family: var(--font-family);
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const NewPrice = styled.span`
  font-size: 18px;
  color: #f39a46;
  font-weight: 500;
  margin-left: 20px; /* Увеличиваем верхний отступ (margin-top) */
`;

export const OldPrice = styled.span`
  font-size: 16px;
  color: #7693bb;
  margin-left: 10px;

  &::before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #7693bb;
    transform: translateY(10%) rotate(-7deg);
  }
`;

interface ButtonProps {
  isInCart: boolean;
}

export const ButtonStyledTopSail = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.isInCart ? "#28a745" : "#2092c5"}; /* Зелёный, если в корзине */
  color: #fff;
  border: none;
  width: 50px;
  height: 50px; /* Увеличиваем высоту кнопки */
  font-size: 1.5em; /* Увеличиваем размер иконки */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute; /* Фиксируем кнопку в правом верхнем углу */
  top: 10px;
  right: 10px;
  border-radius: 50%; /* Сделаем кнопку круглой */

  i {
    transition: color 0.3s ease;
    color: ${(props) =>
      props.isInCart ? "#fff" : "#000"}; /* Белая иконка на зелёном фоне */
  }

  &:hover {
    background-color: ${(props) =>
      props.isInCart ? "#218838" : "#186f91"}; /* Темнее при наведении */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
