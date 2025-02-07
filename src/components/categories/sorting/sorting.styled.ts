import styled from "@emotion/styled"

export const SortingString = styled.span`
  position: absolute;
  // margin-left: 750px;
  right:130px;
  width:150px;
  margin-top:2px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  @media screen and (max-width: 998px) {
    font-size: 14px;
    width:130px;
  }
    @media screen and (max-width: 800px) {
    font-size: 12px;
    width:100px;
  }
`;

export const SortingButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;
  // margin-top: 40px;
  border-radius: 10px;
  width: 120px;
  height: 27px;
  background: #18396c;
  cursor: pointer;
  border: 1px solid #f39a46;
@media screen and (max-width: 998px) {
  width: 120px;
  height: 20px;
}

`;

export const SortingSpan = styled.span`
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

export const DropdownItem = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  width: 118px;
  border-radius: 10px;
  font-size: 16px;
  color: #fff;
  background-color: rgba(24, 57, 108,0.5);
  border: none;
  &:hover {
    background-color: #2E5A99;
    transition: 0.5s;
  }
`;

export const All = styled.div`
  padding-top:40px;
  padding-bottom:10px;
`;

export const ContainerMain = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  // padding: 0 0.75rem;
  // margin-bottom: 100px;
  position: relative;
`;