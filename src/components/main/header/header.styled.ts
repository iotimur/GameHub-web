import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const OuterMain = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 0.75rem;
`;

export const NavMain = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabelMain = styled.a`
  color: white;
  font-size: 35px;
  line-height: 80px;
  margin: 0 50px;
  font-weight: bold;
  border-radius: 10px;
  padding: 7px 0px;
  text-decoration: none;

  @media (max-width: 952px) {
    font-size: 30px;
    padding-left: 50px;
  }

  @media (max-width: 858px) {
    font-size: 20px;
    padding-left: 30px;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LiStyled = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 10px;
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: 952px) {
    font-size: 16px;
  }

  @media (max-width: 858px) {
    font-size: 10px;
  }
`;

export const StyledLinkNav = styled(NavLink)`
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 10px;
  text-transform: uppercase;
  text-decoration: none;

  &.active {
    background: #643aa0;
    transition: 0.5s;
  }

  &:hover {
    background: #643aa0;
    transition: 0.5s;
  }

  @media (max-width: 952px) {
    font-size: 16px;
  }

  @media (max-width: 858px) {
    font-size: 10px;
  }
`;

export const StyledHeader = styled.header`
  background-image: linear-gradient(#f39a46 40%, #643aa0);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
`;

export const CheckButton = styled.div`
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 20px;
  cursor: pointer;
  display: none;
`;


export const LangButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 10px; /* Отступ справа, чтобы не сдвигать элементы */

  &:hover {
    background: white;
    color: black;
  }
`;