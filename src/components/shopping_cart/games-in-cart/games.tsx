import React from 'react';
import '../games-in-cart/games.css';
import { cmc, f1, f2, f3, f4, mortal, windows, ved, fifa } from '../../../../assets/images';

const Games = () => {
    return (
        <>
            <div className="oval">
                Ваша корзина
            </div>
            <div className="container_my">
                <img src={mortal} alt="Игра Мортал Комбат. Змея." style={{ marginTop: '4.5vh' }} />
                <div>
                    <p className="h1">Mortal Kombat 11</p>
                    <div className="small-image">
                        <img src={windows} alt="Иконка Виндоус" style={{ marginTop: '-8vh' }} />                            
                        <div className="price">300 руб.</div>
                    </div>
                    <p className="h2">Дата выпуска: 23 апр. 2019 </p>
                    <p className="h3">MORTAL KOMBAT 11 ULTIMATE ВКЛЮЧАЕТ В СЕБЯ БАЗОВУЮ ИГРУ МК11, КОМВАТ РАСК 1, ДОПОЛНЕНИЕ «ПОСЛЕДСТВИЯ» И НЕДАВНО ДОБАВЛЕННЫЙ НАБОР «КОМБАТ 2».</p>
                    <div className="delete">Удалить</div>
                    <hr />
                </div>
            </div>

            <div className="container_my">
                <img src={fifa} alt="Игра Фифа 23." style={{ marginTop: '4.5vh' }} />
                <div>
                    <p className="h1">EA SPORTS™ FIFA 23</p>
                    <div className="small-image">
                        <img src={windows} alt="Иконка Виндоус" style={{ marginTop: '-8vh' }} />
                        <div className="price">300 руб.</div>
                    </div>      
                    <p className="h2">Дата выпуска: 30 сен. 2022</p>
                    <p className="h3">В FIFA 23 всемирная игра становится еще лучше с технологией HyperMotion2, мужским и женским FIFA World Cup™, женскими командами, кроссплатформенной игрой и множеством прочих возможностей.</p>
                    <div className="delete">Удалить</div>
                    <hr />
                </div>
            </div>

            <div className="container_my">
                <img src={ved} alt="Игра в Ведьмака." style={{ marginTop: '4.5vh' }} />
                <div>
                    <p className="h1">Ведьмак: Дикая Охота</p>
                    <div className="small-image">
                        <img src={windows} alt="Иконка Виндоус" style={{ marginTop: '-8vh' }} />
                        <div className="price">300 руб.</div>
                    </div>
                    <p className="h2">Дата выпуска: 18 мая 2015</p>
                    <p className="h3">Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира.</p>
                    <div className="delete">Удалить</div>
                </div>
            </div>
        </>
    );
};

export default Games;
