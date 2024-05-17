import React from 'react';


import '../css/game_page.css';

import { ErrorBoundary } from "../components/error-boundary";
import  Header  from "../components/main/header/header";
import { Footer } from '../components/footer/footer';
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
        <ErrorBoundary>
        <Header /> 
        <div className="main">
        <div className="header2">
            <h1>Elden Ring</h1>
        </div>
        <div className="group_tr_game-info">
            <Trailer />         
            <GameInfo />
        </div>
        <Gallery />
        <PriceBlock />
        <div className="group_rating_about-game">
            <AboutGame />         
            <RatingBlock />
        </div>
        <SystemRequirements />
        <CommentsSection comments={comments}/>
        </div>
        </ErrorBoundary>
        <Footer/>
    </div>
  );
};

export default Game_page;





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