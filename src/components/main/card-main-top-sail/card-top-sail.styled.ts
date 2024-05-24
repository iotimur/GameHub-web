import styled from "@emotion/styled";

export const ProductCardTopSail = styled.div`
  flex: 1 0 calc((100% - 60px) / 4);
  /* width: calc(100% / 5); */
  height: 22em;
  background-color: #18396c;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-style: italic;
  border-radius: 0.5em;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 2);
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;

  &:hover {
    background-color: #1450a5;
    color: #fff;
  }
`;

export const TopSailImg = styled.img`
  vertical-align: middle;
  width: 100%;
  height: 80%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.52em 0.5em 0 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

export const TopSailTextCard = styled.div`
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  padding-left: 10px;
  color: #fff;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

export const TopSailTButton = styled.div`
  display: flex;
  place-items: center;
  justify-content: center; /* Центрируем по горизонтали */
  align-items: center; /* Центрируем по вертикали */
  /* padding: 0.5em; */
  background: #2092c5;
  height: 100%;
  width: 25%;
  cursor: pointer;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
`;

export const ButtonStyledTopSail = styled.button`
  background-color: #2092c5;
  color: #fff;
  border: none;
  /* border-radius: 50%; */
  width: 50px;
  height: 100%;
  /* height: 25px; */
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
