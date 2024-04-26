import React from 'react';;
import '../css/style_shopping_cart.css';
import '../css/header/menu.css';
import '../css/header_footer1.css';
import {   cmc, f1,f2,f3,f4, mortal, windows, ved, fifa } from '../../assets/images'


const shopping_cart = () => {
  return (
    <>
      
      
      <header>
            <div className="outer">
                <nav>
                    <label className="logo">GameHub</label>
                    <ul className="menu_items">
                    <li><a href="categories.html" className="active">Категории</a></li>
                    <li><a href="#">Войти</a></li>
                    <li><a href="shopping_cart.html">Корзина</a></li>
                    </ul>
                </nav>
            </div>
        </header>

                <main>
                    
                <div className="oval">
                              Ваша корзина
                          </div>
                        <div className="container_my">
                          <img src={mortal} alt="Игра Мортал Комбат. Змея."style={{ marginTop: '4.5vh' }} />
                          <div>
                            <p className="h1">Mortal Kombat 11</p>
                            <div className="small-image">
                                <img src={windows} alt="Иконка Виндоус"style={{ marginTop: '-8vh' }} />                            
                                <div className="price">300 руб.</div>
                              </div>
                             <p className="h2">Дата выпуска: 23 апр. 2019 </p>
                             <p className="h3">MORTAL KOMBAT 11 ULTIMATE ВКЛЮЧАЕТ В СЕБЯ БАЗОВУЮ ИГРУ МК11, КОМВАТ РАСК 1, ДОПОЛНЕНИЕ «ПОСЛЕДСТВИЯ» И НЕДАВНО ДОБАВЛЕННЫЙ НАБОР «КОМБАТ 2».</p>
                              <div className="delete">Удалить</div>
                              <hr></hr>
                        </div>
                      </div>

                      <div className="container_my">
                            <img src={fifa} alt="Игра Фифа 23."style={{ marginTop: '4.5vh' }} />
                              <div>
                               <p className="h1">EA SPORTS™ FIFA 23</p>
                              <div className="small-image">
                                <img src={windows} alt="Иконка Виндоус"style={{ marginTop: '-8vh' }} />
                                <div className="price">300 руб.</div>
                              </div>      
                            <p className="h2">Дата выпуска: 30 сен. 2022</p>
                            <p className="h3">В FIFA 23 всемирная игра становится еще лучше с технологией HyperMotion2, мужским и женским FIFA World Cup™, женскими командами, кроссплатформенной игрой и множеством прочих возможностей.</p>
      
    
                          <div className="delete">Удалить</div>
                         <hr></hr>
                        </div>
                    </div>

                    <div className="container_my">
                        <img src={ved} alt="Игра в Ведьмака." style={{ marginTop: '4.5vh' }} />

                        <div>
                            <p className="h1">Ведьмак: Дикая Охота</p>
                        <div className="small-image">
                        <img src={windows} alt="Иконка Виндоус"style={{ marginTop: '-8vh' }} />
                        <div className="price">300 руб.</div>
        
                        </div>
      
                        <p className="h2">Дата выпуска: 18 мая 2015</p>
                        <p className="h3">Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира.</p>
                        <div className="delete">Удалить</div>
    
                    <div className="total">
                    <span>Промежуточный итог:</span>
                    <div className="price1">900 руб.</div>
                 </div>
                <hr></hr>
            <div className="info">
            <p className="h4">Способ получения</p>
            <p className="h4">Способ оплаты</p>
            </div>
        </div>
    </div>
        <div className="container_my">
            <div className="oval1">
                Купить для себя
             </div>
            <div className="oval2">
                Купить в подарок
            </div>
        </div>
            <div className="delete1">
            <p>Удалить все товары</p>
            </div>  
            <p className ="NDS">НДС: Все цены указаны с учетом НДС (где применимо)</p>
                
            
            
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
                <hr></hr>
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

export default shopping_cart;