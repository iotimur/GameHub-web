import React from "react";
import '../css/reset.css';
// import '../css/categories.css';
// import '../css/header/menu.css';
import '../css/header_footer1.css';
import Header from "../components/header/header.jsx";
import TypesOfCategories from "../components/categories/types-of-categories";
import { f1, f2, f3, f4, cmc } from '../../assets/images'

const Categories = () => {
    return (
        <>
            <Header />
            <main>
                <TypesOfCategories />
            </main>
            <footer className="footer">
                <div className="d-flex in_footer1">
                    <figure>
                        <img src={f1} alt="Лучшая цена" />
                        <figcaption>Лучшая цена</figcaption>
                    </figure>
                    <figure>
                        <img src={f2} alt="Гарантия 100%" />
                        <figcaption>Гарантия 100%</figcaption>
                    </figure>
                    <figure>
                        <img src={f3} alt="Все способы оплаты" />
                        <figcaption>Все способы оплаты</figcaption>
                    </figure>
                    <figure>
                        <img src={f4} alt="Регулярные акции и скидки" />
                        <figcaption>Регулярные акции и скидки</figcaption>
                    </figure>
                </div>
                <hr />
                <div className="in_footer d-flex" >
                    <div className="left">
                        <p className="main">Наши контакты:</p>
                        <nav>
                            <p>Техническая поддержка по общим вопросам:</p>
                            <img src={cmc} alt="cmc" />
                            <a href="gamehub@gmail.com">gamehub@gmail.com</a>
                        </nav>
                        <nav>
                            <p>Администрация:</p>
                            <img src={cmc} alt="cmc" />
                            <a href="gamehub_admin@gmail.com">gamehub_admin@gmail.com</a>
                        </nav>
                    </div>
                    <div className="right">
                        <p className="main">Схема проезда:</p>
                        <script type="text/javascript" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0844633aa054e3fd4986d5bc536bafdec51e39238788989fb3ff3f219e249b26&amp;width=320&amp;height=260&amp;lang=ru_RU&amp;scroll=true"></script>
                    </div>
                </div>
                <div className="bott">
                    <p className="end">Казань, 2024</p>
                </div>

            </footer>
        </>
    );
};

export default Categories;