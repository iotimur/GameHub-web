import React from "react";
import Header from "../components/header/header.jsx";
import MainContent from "../components/main_container/main.jsx";

const Main_page = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <footer className="footer">
        <div className="d-flex in_footer1">
          <figure>
            <img
              src="/assets/Images_main/img_footer/f1.png"
              alt="Лучшая цена"
            />
            <figcaption>Лучшая цена</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/Images_main/img_footer/f2.png"
              alt="Гарантия 100%"
            />
            <figcaption>Гарантия 100%</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/Images_main/img_footer/f3.png"
              alt="Все способы оплаты"
            />
            <figcaption>Все способы оплаты</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/Images_main/img_footer/f4.png"
              alt="Регулярные акции и скидки"
            />
            <figcaption>Регулярные акции и скидки</figcaption>
          </figure>
        </div>
        <hr />
        <div className="in_footer d-flex">
          <div className="left">
            <p className="main">Наши контакты:</p>
            <nav>
              <p>Техническая поддержка по общим вопросам:</p>
              <img src="/assets/Images_main/img_footer/cmc.jpg" alt="cmc" />
              <a href="gamehub@gmail.com">gamehub@gmail.com</a>
            </nav>
            <nav>
              <p>Администрация:</p>
              <img src="/assets/Images_main/img_footer/cmc.jpg" alt="cmc" />
              <a href="gamehub_admin@gmail.com">gamehub_admin@gmail.com</a>
            </nav>
          </div>
          <div className="right">
            <p className="main">Схема проезда:</p>
            <script
              type="text/javascript"
              charSet="utf-8"
              async
              src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0844633aa054e3fd4986d5bc536bafdec51e39238788989fb3ff3f219e249b26&amp;width=320&amp;height=260&amp;lang=ru_RU&amp;scroll=true"
            ></script>
          </div>
        </div>
        <div className="bott">
          <p className="end">Казань, 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Main_page;
