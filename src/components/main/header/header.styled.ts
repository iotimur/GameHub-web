import styled from "@emotion/styled";

export const OuterMain = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 0.75rem;
`;

export const NavMain = styled.nav`
  height: 80px;
  width: 100%;
`;

export const LabelMain = styled.label`
  color: white;
  font-size: 35px;
  line-height: 80px;
  margin: 0 50px;
  font-weight: bold;
`;

export const LiStyled = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
`;

export const RestLinkStyled = styled.a`
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 10px;
  text-transform: uppercase;
`;

export const StyledLink = styled.a`
  /* Стили для активного состояния и состояния наведения */
  &.active,
  &:hover {
    background: #643aa0;
    transition: 0.5s;
  }
`;

export const StyledHeader = styled.header`
  background-image: linear-gradient(#f39a46 40%, #643aa0);
`;
