import React from 'react';

import '../css/header/menu.css';
import '../css/game_page.css';
import '../css/header_footer1.css';


import PriceBlock from '../components/game_page/price-block/price-block';
import GameInfo from '../components/game_page/game-info/game-info';
import Trailer from '../components/game_page/trailer/trailer';
import Gallery from '../components/game_page/gallery-scroll/gallery-scroll';
import {AboutGame} from '../components/game_page/about-game/about-game';
import RatingBlock from '../components/game_page/rating-block/rating-block';
import SystemRequirements from '../components/game_page/system-requirements/system-requirements';
import CommentsSection from '../components/game_page/comments-section/comment-section';

const comments = [
    { username: 'Пользователь1', text: 'Текст комментария 1' },
    { username: 'Пользователь2', text: 'Текст комментария 2' },
    { username: 'Пользователь3', text: 'Текст комментария 3' },
    { username: 'Пользователь4', text: 'Текст комментария 4' },
];
const Game_page = () => {
  return (
    <div>
        <html lang="ru">
        
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

        <body>
        <div className="main">

        <div className="header2">
            <h1>Elden Ring</h1>
        </div>

        <div className="group_tr_game-info">
            <Trailer />
            
            <GameInfo />
        </div>

        

        <Gallery />

        

        {/* <script>
            // Получаем ссылки на кнопки
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            // Добавляем обработчики событий для кнопок
                    
            prevBtn.addEventListener('click', function() {
                scrollGallery(-1);
            });

            nextBtn.addEventListener('click', function() {
                scrollGallery(1);
            });
        </script>

        <script>
            const gallery = document.querySelector('.gallery');
            const scrollDistance = gallery.offsetWidth / 5; // Расстояние для прокрутки, равное ширине одного скриншота

            function scrollGallery(direction) {
                gallery.scrollBy(scrollDistance * direction, 0);
            }
        </script> */}


        <PriceBlock />

        <div className="group_rating_about-game">
            <AboutGame />
            
            <RatingBlock />
        </div>


        <SystemRequirements />


        <CommentsSection comments={comments}/>


        </div>
        </body>
        <footer className="footer"> 
            <div className="d-flex in_footer1">
                <figure>
                    <img src="..\assets\images/f1.png" alt="Лучшая цена"/>
                    <figcaption>Лучшая цена</figcaption>
                </figure>
                <figure>
                    <img src="..\assets\images/f2.png" alt="Гарантия 100%"/>
                    <figcaption>Гарантия 100%</figcaption>
                </figure>
                <figure>
                    <img src="..\assets\images/f3.png" alt="Все способы оплаты"/>
                    <figcaption>Все способы оплаты</figcaption>
                </figure>
                <figure>
                    <img src="..\assets\images/f4.png" alt="Регулярные акции и скидки"/>
                    <figcaption>Регулярные акции и скидки</figcaption>
                </figure>
            </div>
            
            <div className="in_footer d-flex" > 
                <div className="left">
                    <p className="main">Наши контакты:</p>
                    <nav>
                        <p>Техническая поддержка по общим вопросам:</p>
                        <img src="..\assets\images/cmc.jpg" alt="cmc"/>
                        <a href="gamehub@gmail.com">gamehub@gmail.com</a>
                    </nav>      
                    <nav>
                    <p>Администрация:</p>
                        <img src="/images/cmc.jpg" alt="cmc"/>
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

        </html>

    </div>
  );
};

export default Game_page;