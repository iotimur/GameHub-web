import styled from "@emotion/styled"

export const SortingString = styled.span`
  position: absolute;
  margin-left: 800px;
  padding-top: 60px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  @media screen and (max-width: 1200px) {
      margin-left: 630px;
  }
  @media screen and (max-width: 998px) {
    display: none;
  }
`;

export const SortingButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 970px;
  margin-top: 60px;
  border-radius: 10px;
  width: 150px;
  height: 27px;
  background: #18396c;
  cursor: pointer;
  border: 1px solid #f39a46;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    margin-left: 800px;
}
@media screen and (max-width: 998px) {
  margin-left: 600px;
}
@media screen and (max-width: 800px) {
  margin-left: 450px;
}
`;

export const Sorting = styled.span`
  color: rgb(255, 255, 255);
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(24, 57, 108,0.5);
  border: 1px solid #f39a46;
  border-radius: 10px;
  padding: 8px 0;
  z-index: 1;
  
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  width: 148px;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  &:hover {
    background-color: #2E5A99;
    transition: 0.5s;
    // color: #000;
  }
`;