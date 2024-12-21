import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10;
  overflow: auto; /* Для прокрутки, если элементы не помещаются */
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px; /* Высота строки */
  padding: 5px 10px;
  border-bottom: 1px solid #f8f8f8; /* Более светлый оттенок */
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ececec; /* Светлый оттенок при наведении */
  }
`;



export const DropdownImage = styled.img`
  height: 40px;
  width: 60px; /* Прямоугольное изображение */
  object-fit: cover;
  margin-right: 10px;
`;

export const DropdownText = styled.div`
  flex: 1;
  overflow: hidden;

  h4 {
    font-size: 14px;
    margin: 0;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  p {
    font-size: 12px;
    margin: 5px 0 0;
    color: #555;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
