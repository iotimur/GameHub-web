import React from "react";
import h from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={h.outer}>
        <nav>
          <label className={h.logo}>GameHub</label>
          <ul className={h.menu_items}>
            <li>
              <a href="categories.html" className={h.active}>
                Категории
              </a>
            </li>
            <li>
              <a href="#">Войти</a>
            </li>
            <li>
              <a href="shopping_cart.html">Корзина</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
