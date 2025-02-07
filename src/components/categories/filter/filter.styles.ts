import styled from "@emotion/styled"

export const String = styled.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  @media screen and (max-width: 998px) {
  font-size: 12px;
}
`;

export const SortingButton = styled.button`
  margin-top:10px;
  // z-index: 100;
  position: absolute;
  display: flex;
  right: 0px;
  border-radius: 10px;
  width: 110px;
  height: 25px;
  background: #18396c;
  cursor: pointer;
  border: 1px solid #f39a46;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  &:hover {
    background-color: #2E5A99;
    transition: 0.5s;
    opacity: 1;
  }

@media screen and (max-width: 998px) {
  width: 90px;
  height: 20px;
  font-size: 12px;
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
  z-index: 100;
`;

export const DropdownItem = styled.button`
  padding: 2px 0px;
  cursor: pointer;
  width: 108px;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(24, 57, 108,0.5);
  border: none;
  
  &:hover {
    background-color: #2E5A99;
    transition: 0.5s;
  }

  @media screen and (max-width: 998px) {
  width: 88px;
  height: 20px;
  font-size: 12px;
}
`;