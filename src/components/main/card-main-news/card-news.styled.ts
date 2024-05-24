import styled from "@emotion/styled";

export const ProductСardNews = styled.div`
  flex: 1 0 calc((100% - 120px) / 2);
  min-width: 20em; /* Добавляем min-width */
  background-color: #18396c;
  font-style: italic;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  height: 20em;
  border-radius: 0.5em;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 2);

  &:hover {
    background-color: #1450a5;
    color: #fff;
  }
`;

export const NewsСardImg = styled.img`
  width: 100%;
  height: 70%; /* Устанавливаем высоту равной ширине */
  border-radius: 0.52em 0.5em 0 0;
`;

export const TextCardNews = styled.div`
  padding: 5px;
  color: #fff;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
