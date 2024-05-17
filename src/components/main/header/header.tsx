import React from "react";
import { Link } from 'react-router-dom';
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
              <LabelMain href="/gamehub">GameHub</LabelMain>
            <ul>
              <LiStyled>
                <StyledLink href="/gamehub/categories">Категории</StyledLink>
              </LiStyled>
              <LiStyled>
                <RestLinkStyled href="/gamehub/entrance">Войти</RestLinkStyled>
              </LiStyled>
              <LiStyled>
                <RestLinkStyled href="/gamehub/shopping-cart">Корзина</RestLinkStyled>
              </LiStyled>
            </ul>
          </NavMain>
        </OuterMain>
      </StyledHeader>
    </div>
  );
};

export default Header;
