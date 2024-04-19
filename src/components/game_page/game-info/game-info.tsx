import React from 'react';
import './game-info.css';

const GameInfo = () => {
    return (
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
    );
};

export default GameInfo;
