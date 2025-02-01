import React from "react";
import { useTranslation } from 'react-i18next'

import {
  OuterMain,
  NavMain,
  LiStyled,
  StyledLink,
  StyledLinkNav,
  StyledHeader,
  LangButton,
} from "./header.styled";

const Header = () => {
  const { t, i18n } = useTranslation()
  const changeLanguageToRu = () => {
    i18n.changeLanguage('ru')
  }

  const changeLanguageToEn = () => {
    i18n.changeLanguage('en')
  }
// const toggleLanguage = () => {
//   i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
// };
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
              {/* <LangButton onClick={toggleLanguage}> */}
              <LangButton onClick={changeLanguageToRu}>ru</LangButton>
              <LangButton onClick={changeLanguageToEn}>en</LangButton>
                {/* {i18n.language === "ru" ? "EN" : "RU"}
              </LangButton> */}
                <StyledLinkNav to="/gamehub/categories">
                  {t("header_categories")}
                </StyledLinkNav>
              </LiStyled>

              <LiStyled>
                <StyledLinkNav to="/gamehub/entrance">{t("header_login")}</StyledLinkNav>
              </LiStyled>

              <LiStyled>
                <StyledLinkNav to="/gamehub/shopping-cart">
                  {t("header_cart")}
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
