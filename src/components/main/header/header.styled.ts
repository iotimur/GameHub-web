import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


interface MobileMenuProps {
  isOpen: boolean;
}

// Стили для скрытия элементов на мобильной версии, когда меню открыто
export const HideOnMobile = styled.div<{ isMenuOpen: boolean }>`
  display: block;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "none" : "block")}; /* Скрываем элементы при открытом меню */
  }
`;


export const OuterMain = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 0.75rem;
  width: 100%;
`;

export const NavMain = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Это заставит GameHub быть слева, а остальные элементы справа */

  @media (max-width: 952px) {
    justify-content: flex-start; /* Для экранов ниже 952px элементы будут выравниваться слева */
  }
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

  /* Медиазапросы для уменьшения размера шрифта на меньших экранах */
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

  /* Чтобы элементы располагались справа */
  @media (max-width: 952px) {
    justify-content: flex-start; /* Чтобы элементы располагались слева */
  }
`;

export const LiStyled = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 10px;

  @media (max-width: 952px) {
    margin: 0 5px; /* Уменьшаем отступы для меньших экранов */
  }
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

interface MobileMenuProps {
  isOpen: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9); /* Темный фон для лучшего контраста */
  padding: 20px;
  z-index: 1000;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out; /* Плавное появление */
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")}; /* Сдвиг меню за пределы экрана */
  
  @media (min-width: 768px) {
    display: none; /* На больших экранах меню скрыто */
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

  @media (max-width: 952px) {
    font-size: 16px;
    padding: 5px 10px;
  }

  @media (max-width: 858px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const TransparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeIn 0.5s ease-in-out; /* Плавное затемнение фона */
`;

export const CheckButton = styled.div`
  font-size: 30px;
  color: white;
  line-height: 80px;
  margin-right: 20px;
  cursor: pointer;
  display: none;

  /* При уменьшении экрана до мобильной версии */
  @media (max-width: 768px) {
    display: block;
    margin-top: 10px; /* Добавляем отступ сверху */
  }
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
// Применяем стили для основной шапки (десктопный режим не изменяется)
export const StyledHeader = styled.header`
  background-image: linear-gradient(#f39a46 40%, #643aa0);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

  display: flex;
  justify-content: space-between; /* Распределяет элементы по бокам */
  align-items: center;

  @media (max-width: 952px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;