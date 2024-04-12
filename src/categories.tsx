import React from "react";
import './css/reset.css';
import './css/categories.css';
import './css/menu.css';
import './css/footer.css';

const Categories = () => {
    return (
        <>
            <body>
                <header>
                    <div className="outer">
                        <nav>
                            <label className="logo">GameHub</label>
                            <ul className="menu_items">
                                <li><a href="categories.html" className="active">Категории</a></li>
                                <li><a href="#">Войти</a></li>
                                <li><a href="basket.html">Корзина</a></li>
                            </ul>
                        </nav>
                    </div>

                </header>
                <main>
                    <div>
                        <div className="big-separator"></div>
                        <div className="big-separator"></div>
                        <span className="sort-txt">Сортировать по</span>
                        <button className="filter">
                            <img className="filter-img" src="../assets/images/стрелка.png" alt="стрелка вниз" width="34" height="21" />
                        </button>

                        <div className="rounded-rectangle">
                            <h1 className=" intro-title">
                                Лидеры продаж
                            </h1>
                        </div>
                        <div className="big-separator"></div>

                        <button className="card ">
                            <img className="card-img" src="../assets/images/image 4.jpg" alt="Обложка игры Counter-Strike 2" />
                            <span className="title-game">Counter-Strike 2</span>
                            <img className="img-windows" src="../assets/images/windows.png" width="40" />
                            <span className="price-tx price-txt">Бесплатно</span>
                        </button>

                        <div className="separator"></div>
                        <button className="card">
                            <img className="card-img" src="../assets/images/image 5.jpg" alt="Обложка игры Palworld" />
                            <span className="title-game">Palworld</span>
                            <img className="img-windows" src="../assets/images/windows.png" width="40" />
                            <span className="new-price">990 руб.</span>
                            <span className="old-price">1100 руб.</span>
                        </button>

                        <div className="separator"></div>
                        <button className="card group-tr-game-info">
                            <img className="card-img" src="../assets/images/image 6.jpg" alt="Обложка игры " />
                            <span className="title-game">PUBG: BATTLEGROUNDS</span>
                            <img className="img-windows" src="../assets/images/windows.png" width="40" />
                            <span className="price-tx price-txt">Бесплатно</span>
                        </button>
                        <div className="separator"></div>
                        <button className="show-more-btn">
                            <span>Показать больше</span>
                        </button>
                        <div className="big-separator"></div>
                        <div className="big-separator"></div>
                        <div className="rounded-rectangle">
                            <span className="intro-title">
                                Новинки
                            </span>
                        </div>
                        <div className="big-separator"></div>
                        <button className="card">
                            <img className="card-img" src="../assets/images/alpha league.jpg" alt="Обложка игры Alpha League" />
                            <img className="img-windows" src="../assets/images/windows.png" width="40" height="40" />
                            <span className="title-game">Alpha League</span>
                            <span className="price-tx price-txt">Бесплатно</span>
                        </button>
                        <div className="separator"></div>

                        <button className="card">
                            <img className="card-img" src="../assets/images/sons of the forests.jpg"
                                alt="Обложка игры Sons Of The Forests" />
                            <img className="img-windows" src="../assets/images/windows.png" width="40" height="40" />
                            <span className="title-game">Sons Of The Forests</span>
                            <span className="old-price">1100 руб.</span>
                            <span className="new-price">820 руб.</span>
                        </button>
                        <div className="separator"></div>

                        <button className="card">
                            <img className="card-img" src="../assets/images/pacific drive.jpg" alt="Обложка игры Pacific Drives" />
                            <img className="img-windows" src="../assets/images/windows.png" width="40" height="40" />
                            <span className="title-game">Pacific Drives</span>
                            <span className="new-price">1799 руб.</span>
                        </button>
                        <div className="separator"></div>
                        <button className="show-more-btn">
                            <span>Показать больше</span>
                        </button>
                        <div className="big-separator"></div>
                        <div className="big-separator"></div>
                        <div className="rounded-rectangle">
                            <h1 className="intro-title">Скидки</h1>
                        </div>
                        <div className="big-separator"></div>
                        <button className="card">
                            <img className="card-img" src="../assets/images/How to Survive.jpg" alt="Обложка игры How to Survive" />
                            <img className="img-windows" src="../assets/images/windows.png" width="40" height="40" />
                            <span className="title-game">How to Survive</span>
                            <span className="new-price">83 руб.</span>
                        </button>
                        <div className="separator"></div>

                        <button className="card">
                            <img className="card-img" src="../assets/images/Red Solstice 2 Survivors.jpg"
                                alt="Обложка игры Red Solstice 2 Survivors" width="356" height="166" />
                            <img className="img-windows" src="../assets/images/windows.png" width="40" height="40" />
                            <span className="title-game">Red Solstice 2 Survivors</span>
                            <span className="new-price">561 руб.</span>
                        </button>
                        <div className="separator"></div>
                        <button className="card">
                            <img className="card-img" src="../assets/images/sons of the forests.jpg"
                                alt="Обложка игры Sons Of The Forests" />
                            <img className="img-windows" src="../assets/images/windows.png" width="40" height="40" />
                            <span className="title-game">Sons Of The Forests</span>
                            <span className="old-price">1100 руб.</span>
                            <span className="new-price">820 руб.</span>
                        </button>
                        <div className="separator"></div>
                        <button className="show-more-btn">
                            <span>Показать больше</span>
                        </button>
                        <div className="big-separator"></div><div className="big-separator"></div>
                    </div>
                </main>
            </body>

            <footer className="footer">
                <div className="d-flex in_footer1">
                    <figure>
                        <img src="..\assets\images/f1.png" alt="Лучшая цена" />
                        <figcaption>Лучшая цена</figcaption>
                    </figure>
                    <figure>
                        <img src="..\assets\images/f2.png" alt="Гарантия 100%" />
                        <figcaption>Гарантия 100%</figcaption>
                    </figure>
                    <figure>
                        <img src="..\assets\images/f3.png" alt="Все способы оплаты" />
                        <figcaption>Все способы оплаты</figcaption>
                    </figure>
                    <figure>
                        <img src="..\assets\images/f4.png" alt="Регулярные акции и скидки" />
                        <figcaption>Регулярные акции и скидки</figcaption>
                    </figure>
                </div>
                <hr></hr>
                <div className="in_footer d-flex" >
                    <div className="left">
                        <p className="main">Наши контакты:</p>
                        <nav>
                            <p>Техническая поддержка по общим вопросам:</p>
                            <img src="..\assets\images/cmc.jpg" alt="cmc" />
                            <a href="gamehub@gmail.com">gamehub@gmail.com</a>
                        </nav>
                        <nav>
                            <p>Администрация:</p>
                            <img src="..\assets\/images/cmc.jpg" alt="cmc" />
                            <a href="gamehub_admin@gmail.com">gamehub_admin@gmail.com</a>
                        </nav>
                    </div>
                    <div className="right">
                        <p className="main">Схема проезда:</p>
                        <script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0844633aa054e3fd4986d5bc536bafdec51e39238788989fb3ff3f219e249b26&amp;width=320&amp;height=260&amp;lang=ru_RU&amp;scroll=true"></script>
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