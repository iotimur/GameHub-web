import React from 'react';

import '../css/header/menu.css';
import '../css/game_page.css';
import '../css/header_footer1.css';
import { screen1, screen2, screen3, screen4, screen5, screen6, screen7, logo } from '../../assets/images'




function scrollGallery(direction: number) {
  
    return false; // Предотвращение перезагрузки страницы
}

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
                    <li><a href="basket.html">Корзина</a></li>
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
            <div className="trailer">
                <iframe width="598" height="346" src="https://www.youtube.com/embed/AKXiKBnzpBQ" allowFullScreen></iframe>
            </div>
            
            <div className="game-info">
                <div className="game-info-text">
                    <ul>
                        <li><strong>Жанр:</strong> Экшены, RPG</li>
                        <li><strong>Язык:</strong> Русский (субтитры)</li>
                        <li><strong>Дата выхода:</strong> 25 февраля 2022</li>
                        <li><strong>Издатель:</strong> FromSoftware Inc., BANDAI NAMCO Entertainment</li>
                        <li><strong>Разработчик:</strong> FromSoftware Inc.</li>
                        <li><strong>Особенности:</strong> 
                            <ul>
                                <li>Для одного игрока</li>
                                <li>Кооперативная игра</li>
                                <li>Для нескольких игроков</li>
                                <li>Контроллер</li>
                            </ul>
                        </li>
                        <li><strong>Регион:</strong> Россия, Украина и СНГ</li>
                    </ul>
                </div>

                
            </div>
        </div>

        

        <div className="gallery-container">
            <div className="gallery">
                <img src={screen1} alt="Screenshot 1" className='screenshot'/>
                <img src={screen2} alt="Screenshot 2" className='screenshot'/>
                <img src={screen3} alt="Screenshot 3" className='screenshot'/>
                <img src={screen4} alt="Screenshot 4" className='screenshot'/>
                <img src={screen5} alt="Screenshot 5" className='screenshot'/>
                <img src={screen6} alt="Screenshot 6" className='screenshot'/>
                <img src={screen7} alt="Screenshot 7" className='screenshot'/>
  
            </div>
            <button className="btn-scroll" onClick={() => scrollGallery(-1)} style={{ position: 'absolute', left: 0, width: 64, height: 103 }}>Назад</button>
            <button className="btn-scroll" onClick={() => scrollGallery(1)} style={{ position: 'absolute', right: 0, width: 64, height: 103 }}>Вперед</button>

        </div>

        

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


        <div className="price-block">
            <div className="additional-rectangle">
                <p className="discount">-8%</p>
            </div>
            <div className="price-details">
                <p className="price-new">3295руб/</p>
                <p className="price-old">3599руб</p>
                
            </div>
            <div className="price-image">
                <img src={logo} alt="logo_microsoft" className='logo' width="40" height="36" />
                
            </div>
            <button className="price-rectangle">
                <p className="price-text">В корзину</p>
            </button>
            
            
        </div>

        <div className="group_rating_about-game">
            <div className="about-game">
                
                <h2 className="about-game-title">Об игре</h2>
                <h3 className="about-game-subtitle">Новый фэнтезийный ролевой боевик</h3>
                <p className="about-game-text">
                    Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.
                </p>
                <h3 className="about-game-subtitle">Огромный захватывающий мир</h3>
                <p className="about-game-text">
                    Огромный мир с открытыми полями, множеством ситуаций и гигантскими подземельями, где сложные трёхмерные конструкции сочетаются воедино. Путешествуйте, преодолевайте смертельные опасности и радуйтесь успехам.
                </p>
                <h3 className="about-game-subtitle">Создайте своего персонажа</h3>
                <p className="about-game-text">
                    Вы можете не только изменить внешность персонажа, но также комбинировать оружие, броню и предметы. Развивайте персонажа по своему вкусу. Наращивайте мышцы или постигайте таинства магии.
                </p>
                <h3 className="about-game-subtitle">Эпическая драма, выросшая из мифа</h3>
                <p className="about-game-text">
                    Многослойная история, разбитая на фрагменты. Эпическая драма, в которой мысли персонажей пересекаются в Междуземье.
                </p>
                <h3 className="about-game-subtitle">Уникальный сетевой режим, приближающий вас к другим игрокам
                    это подзаголовки</h3>
                <p className="about-game-text">
                    Помимо многопользовательского режима, в котором вы напрямую подключаетесь к другим игрокам и путешествуете вместе, есть асинхронный сетевой режим, позволяющий ощутить присутствие других игроков.
                </p>
            </div>
            
            <div className="rating-block">
                <div className="rating-block-age">
                    <div className="rating-block-age-square">
                        <p className="rating-age-square-text">16+</p>
                    </div>
                    <div className="rating-block-age-text">
                        <p>ДЛЯ ДЕТЕЙ СТАРШЕ 16 ЛЕТ</p>
                        <p>Рейтинг от: Закон о рейтинге контента</p>
                    </div>
                </div>

                <div className="rating-block-gamestar">
                    <div className="rating-block-gamestar-square">
                        <p className="rating-gamestar-square-text">93</p>
                    </div>
                    <div className="rating-block-gamestar-text">
                        <p>GameStar</p>
                    </div>
                </div>

                <div className="rating-block-metacritic">
                    <div className="rating-block-metacritic-square">
                        <p className="rating-metacritic-square-text">94</p>
                    </div>
                    <div className="rating-block-metacritic-text">
                        <p>metacritic</p>
                    </div>
                </div>

                <div className="rating-block-opencritic">
                    <div className="rating-block-opencritic-square">
                        <p className="rating-opencritic-square-text">92</p>
                    </div>
                    <div className="rating-block-opencritic-text">
                        <p>OpenCritic</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="system-requirements">
            <h2 className="system-requirements-title">СИСТЕМНЫЕ ТРЕБОВАНИЯ</h2>
            <div className="requirements-columns">
                <div className="column">
                    <h3 className="requirements-subtitle">РЕКОМЕНДУЕМЫЕ:</h3>
                    <ul className="requirements-list">
                        <li>64-разрядные процессор и операционная система</li>
                        <li>ОС: Windows 10</li>
                        <li>Процессор: INTEL CORE I5-8400 or AMD RYZEN 3 3300X</li>
                        <li>Оперативная память: 12 GB ОЗУ</li>
                        <li>Видеокарта: NVIDIA GEFORCE GTX 1060 3 GB or AMDRADEON RX 580 4 GB</li>
                        <li>DirectX: версии 12</li>
                        <li>Место на диске: 60 GB</li>
                        <li>Звуковая карта: Windows Compatible Audio Device</li>
                    </ul>
                </div>
                <div className="column">
                    <h3 className="requirements-subtitle">МИНИМАЛЬНЫЕ:</h3>
                    <ul className="requirements-list">
                        <li>64-разрядные процессор и операционная система</li>
                        <li>ОС: Windows 10/11</li>
                        <li>Процессор: INTEL CORE I7-8700K or AMD RYZEN 5 3600X</li>
                        <li>Оперативная память: 16 GB ОЗУ</li>
                        <li>Видеокарта: NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB</li>
                        <li>DirectX: версии 12</li>
                        <li>Место на диске: 60 GB</li>
                        <li>Звуковая карта: Windows Compatible Audio Device</li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="comments-section">
            <h2 className="comments-title">Комментарии</h2>
            <div className="comment-block">
                <div className="comment">
                    <div className="avatar"></div>
                    <div className="comment-content">
                        <h3 className="comment-name">Имя пользователя</h3>
                        <p className="comment-text">Текст комментария</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="avatar"></div>
                    <div className="comment-content">
                        <h3 className="comment-name">Имя пользователя</h3>
                        <p className="comment-text">Текст комментария</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="avatar"></div>
                    <div className="comment-content">
                        <h3 className="comment-name">Имя пользователя</h3>
                        <p className="comment-text">Текст комментария</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="avatar"></div>
                    <div className="comment-content">
                        <h3 className="comment-name">Имя пользователя</h3>
                        <p className="comment-text">Текст комментария</p>
                    </div>
                </div>
            </div>
            
            <button className="show-more-button">Показать больше</button>
        </div>


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