import React from 'react';
import '../css/header/menu.css';
import '../css/header_footer1.css';
import '../css/styles_personal_account.css';

import { game11, game22, f1, f2, f3, f4, cmc} from '../../assets/images'


const Personal_account = () => {
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
                    <li><a href="shopping_cart.html">Корзина</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    
        <main className="container"> 
            <div className="in_container">
                <div className="zagolov">
                    <p>Личный кабинет</p>
                </div>  
    
                <div className="block1">
                    <div className="d-flex">
                        <div className="top">
                            <p>Личная информация</p>
                        </div>
                        <div className="change">
                            <button id="izm">Изменить</button>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div className="forms d-flex">
                            <div className="form1">
                                <form name="user_name" action="#" method="get">    
                                    <input type="text" name="user_name" placeholder="Ваше имя:"/>
                                </form>
                                <form name="user_surname" action="#" method="get">    
                                    <input type="text" name="user_surname" placeholder="Ваша фамилия:" />
                                </form>
                            </div>
                            <div className="form2"> 
                                <form name="user_tel" action="#" method="get">    
                                    <input type="tel" name="user_tel" placeholder="Ваш номер телефона:" />
                                </form>
                                <form name="user_mail" action="#" method="get">
                                    <input type="email" name="user_mail" placeholder="Ваш Email:" />
                                </form>
                            </div>
                            <div className="form3">
                                <form name="user_name" action="#" method="get">
                                    <input type="text" name="user_login" placeholder="Ваш логин:" />
                                </form>
                                <form name="user_surname" action="#" method="get">
                                    <input type="datetime" name="user_date" placeholder="Ваша дата рождения:" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="block2">
                    <div className="top">
                        <p>Мои покупки</p>
                    </div>
                    <hr/>
                    <div className="shops">
                        <div className="left d-flex">
                            <div>
                                <img src={game11} alt="game1_photo"/>
                            </div>  
                            
                            <div className="d-f">
                                <p>Дата покупки: 18.01.24 <br />Сумма: 300 руб. <br /> Статус: оплачено</p>
                            </div>  
                            <div>
                                <img src={game22} alt="game2_photo"/>
                            </div>
                            <div className="d-f">
                                <p>Дата покупки: 13.02.24 <br /> Сумма: 300 руб. <br /> Статус: оплачено</p>
                            </div>  

                        </div>
                    </div>
                    <div className="bott">
                        <button className="add">Показать еще</button>
                    </div>        
                </div>
    
                <div className="block3">
                    <div className="top">
                        <p>Помощь</p>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div className="links">
                            <p className="of">Оформление заказа</p>
                            <p>Выберите товары и добавьте их в корзину. Оформите заказ. Подтвердите и оплатите заказ.</p>
                            <p className="of">Способы оплаты:</p>
                            <p>Банковская карта или электронный кошелёк.</p>
                            <p className="of">Изменение личных данных</p>
                            <p>Вот некоторые данные, которые можно изменить в профиле: имя, фамилия, номер телефона, электронная почта. </p>
                            <p className="of">Добавление товара в корзину</p> 
                            <p>Чтобы добавить товар в корзину, нажмите кнопку «Купить для себя» или «Купить в подарок» на карточке товара</p>
                        </div>       
                    </div>
                </div>
            </div>
        </main>
    
        <footer className="footer"> 
            <div className="d-flex in_footer1">
                <figure>
                    <img src={f1} alt="Лучшая цена"/>
                    <figcaption>Лучшая цена</figcaption>
                </figure>
                <figure>
                    <img src={f2} alt="Гарантия 100%"/>
                    <figcaption>Гарантия 100%</figcaption>
                </figure>
                <figure>
                    <img src={f3} alt="Все способы оплаты"/>
                    <figcaption>Все способы оплаты</figcaption>
                </figure>
                <figure>
                    <img src={f4} alt="Регулярные акции и скидки"/>
                    <figcaption>Регулярные акции и скидки</figcaption>
                </figure>
            </div>
            <hr/> 
            <div className="in_footer d-flex" > 
                <div className="left">
                    <p className="main">Наши контакты:</p>
                    <nav>
                        <p>Техническая поддержка по общим вопросам:</p>
                        <img src={cmc} alt="cmc"/>
                        <a href="gamehub@gmail.com">gamehub@gmail.com</a>
                    </nav>      
                    <nav>
                       <p>Администрация:</p>
                        <img src={cmc} alt="cmc"/>
                        <a href="gamehub_admin@gmail.com">gamehub_admin@gmail.com</a>
                    </nav>
                </div>
                <div className="right">
                    <p className="main">Схема проезда:</p>
                    <script type="text/javascript"  async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0844633aa054e3fd4986d5bc536bafdec51e39238788989fb3ff3f219e249b26&amp;width=320&amp;height=260&amp;lang=ru_RU&amp;scroll=true"></script>
                </div>    
            </div>
            <div className="bott">
                <p className="end">Казань, 2024</p>
            </div>
    
        </footer>
    
    </body>
    </>
  );
};

export default Personal_account;