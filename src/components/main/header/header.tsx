import React from "react";
import {
  OuterMain,
  NavMain,
  LiStyled,
  StyledLink,
  StyledLinkNav,
  StyledHeader,
} from "./header.styled";

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <OuterMain>
          <NavMain>
            <StyledLink to="/gamehub" end>
              GameHub
            </StyledLink>
            <ul>
              <LiStyled>
                <StyledLinkNav to="/gamehub/categories">
                  Категории
                </StyledLinkNav>
              </LiStyled>

              <LiStyled>
                <StyledLinkNav to="/gamehub/entrance">Войти</StyledLinkNav>
              </LiStyled>

              <LiStyled>
                <StyledLinkNav to="/gamehub/shopping-cart">
                  Корзина
                </StyledLinkNav>
              </LiStyled>
            </ul>
          </NavMain>
        </OuterMain>
      </StyledHeader>
    </div>
  );
};

export default Header;
