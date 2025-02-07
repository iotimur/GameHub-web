import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  OuterMain,
  NavMain,
  StyledLink,
  StyledLinkNav,
  StyledHeader,
  LangButton,
  CheckButton,
  MobileMenu,
  TransparentBackground,
} from "./header.styled";

const MOBILE_WIDTH = 858;

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLanguageToRu = () => {
    i18n.changeLanguage("ru");
  };

  const changeLanguageToEn = () => {
    i18n.changeLanguage("en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <StyledHeader>
        <OuterMain>
          <NavMain>
            {!isMobile && (
              <>
                <StyledLink to="/gamehub" end>
                  GameHub
                </StyledLink>
                <div className="desktop-menu">
                  <StyledLinkNav to="/gamehub/categories">{t("header_categories")}</StyledLinkNav>
                  <StyledLinkNav to="/gamehub/entrance">{t("header_login")}</StyledLinkNav>
                  <StyledLinkNav to="/gamehub/shopping-cart">{t("header_cart")}</StyledLinkNav>
                </div>
              </>
            )}
            <div className="lang-switcher">
              <LangButton onClick={changeLanguageToRu}>ru</LangButton>
              <LangButton onClick={changeLanguageToEn}>en</LangButton>
            </div>
            {isMobile && <CheckButton onClick={toggleMenu}>☰</CheckButton>}
          </NavMain>
        </OuterMain>
      </StyledHeader>

      {isMobile && isMenuOpen && <TransparentBackground onClick={toggleMenu} />}

      {isMobile && (
        <MobileMenu isOpen={isMenuOpen}>
          <StyledLinkNav to="/gamehub/categories" onClick={toggleMenu}>
            {t("header_categories")}
          </StyledLinkNav>
          <StyledLinkNav to="/gamehub/entrance" onClick={toggleMenu}>
            {t("header_login")}
          </StyledLinkNav>
          <StyledLinkNav to="/gamehub/shopping-cart" onClick={toggleMenu}>
            {t("header_cart")}
          </StyledLinkNav>
        </MobileMenu>
      )}
    </div>
  );
};

export default Header;
