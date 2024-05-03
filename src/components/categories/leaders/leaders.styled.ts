import styled from "@emotion/styled"

export const TitleRectangle = styled.div`
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: #f39a46;
    width: fit-content;
    height: 64px;
  
`;

export const TitleCategoryStyled = styled.h1`
    font-family: var(--font-family);
    font-style: italic;
    font-weight: bold;
    font-size: 32px;
    color: #000;
    display: flex;
    flex-direction: column;
`;
export const Card = styled.button`
    width: 100%;
    height: 170px;
    background: #18396C;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    border: 1px solid #f39a46;

  &:hover {
  background: #2E5A99;
  transition: 0.5s;
}
`;
export const CardImg = styled.img`
    margin-left: 10px;
    width: 350px;
    height: 150px;
    border-radius: 10px;
`;

export const TitleGame = styled.span`
    position: static;
    padding-left: 50px;
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 500;
    font-size: 32px;
    color: #fff;
`;

export const Windows = styled.img`
    position: absolute;
    right: 200px;
    max-width: 40px;
`;
export const BtnMoreStyled = styled.button`
width: 100%;
  height: 50px;
  background: #18396c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #f39a46;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 100;
  font-size: 20px;
  color: #fff;
  &:hover {
    background: #2E5A99;
    transition: 0.5s;
  }
`;

export const NewPrice = styled.span`
  position: absolute;
  right: 20px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  color: #f39a46;
  `;

export const OldPrice = styled.span`
  position: absolute;
  right: 20px;
  top: 35%;
  transform: translateY(-50%);
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  color: #7693bb;

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

export const FreePrice = styled.span`
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  margin-left: auto;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  width: fit-content;
  height: 30px;
  background: #102D59;
  `;

export const Separator = styled.div`
    height: 5px;
`;
export const BigSeparator = styled.div`
    height: 20px;
`;