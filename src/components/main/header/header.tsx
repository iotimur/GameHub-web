import React from "react";
import {
  OuterMain,
  NavMain,
  LabelMain,
  LiStyled,
  RestLinkStyled,
  StyledLink,
  StyledHeader,
} from "./header.styled";

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <OuterMain>
          <NavMain>
            <LabelMain>GameHub</LabelMain>
            <ul>
              <LiStyled>
                <StyledLink href="categories">Категории</StyledLink>
              </LiStyled>
              <LiStyled>
                <RestLinkStyled href="#">Войти</RestLinkStyled>
              </LiStyled>
              <LiStyled>
                <RestLinkStyled href="basket.html">Корзина</RestLinkStyled>
              </LiStyled>
            </ul>
          </NavMain>
        </OuterMain>
      </StyledHeader>
    </div>
  );
};

export default Header;
