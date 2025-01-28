import styled from "@emotion/styled";

export const WrapperSearch = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 30px;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

export const SearchInput = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

export const InputPlace = styled.input`
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

export const IconSearch = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  color: #644bff;
  cursor: pointer;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

// Стили для выпадающего компонента
export const Dropdown = styled.div`
  position: absolute;
  top: 100%; /* Располагаем под поисковой строкой */
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 10;

  p {
    padding: 10px 15px;
    margin: 0;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #f0f0f0; /* Цвет подсветки */
      color: #333; /* Цвет текста при наведении */
    }
  }
`;
