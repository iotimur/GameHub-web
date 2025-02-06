import styled from "@emotion/styled";

export const TitleMain = styled.div`
  background-color: #f39a46;
  border-radius: 25px;
  width: max-content;
  height: 50px;
  margin-top: 50px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

export const TitleRectangle = styled.div`
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: #f39a46;
    width: fit-content;
    height: 50px;
    margin-top:50px;
    padding: 10px 15px;
    margin-bottom:20px;
    @media screen and (max-width: 1200px) {
      height: 50px;
    }
    @media screen and (max-width: 800px) {
      height: 45px;
    }
      @media screen and (max-width: 440px) {
    height: 30px;
  }
`;
export const TitleCategory = styled.h2`
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 24px;
    color: #000;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
`;
