import React from "react";
import {
  OuterMain,
  NavMain,
  LabelMain,
  LiStyled,
  StyledLink,
  StyledHeader,
} from "./header.styled";

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <OuterMain>
          <NavMain>
            <LabelMain href="/gamehub">GameHub</LabelMain>
            <ul>
              <LiStyled>
                <StyledLink href="/gamehub/categories">Категории</StyledLink>
              </LiStyled>
              <LiStyled>
                <StyledLink href="/gamehub/entrance">Войти</StyledLink>
              </LiStyled>
              <LiStyled>
                <StyledLink href="/gamehub/shopping-cart">Корзина</StyledLink>
              </LiStyled>
            </ul>
          </NavMain>
        </OuterMain>
      </StyledHeader>
    </div>
  );
};

export default Header;
