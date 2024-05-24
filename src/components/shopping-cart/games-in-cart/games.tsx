import React, { useState } from 'react';
import { mortal, windows, ved, fifa } from './index';
import {
    Oval, Container_my, Title1, Title2, Title3, SmallImage, BigImage, Price, Delete, Hr, Total, TotalSpan, Price1
} from '../games-in-cart/games.styled';

const initialGames = [
    {
        id: 1,
        title: "Mortal Kombat 11",
        image: mortal,
        releaseDate: "23 апр. 2019",
        description: "MORTAL KOMBAT 11 ULTIMATE ВКЛЮЧАЕТ В СЕБЯ БАЗОВУЮ ИГРУ МК11, КОМВАТ РАСК 1, ДОПОЛНЕНИЕ «ПОСЛЕДСТВИЯ» И НЕДАВНО ДОБАВЛЕННЫЙ НАБОР «КОМБАТ 2».",
        price: 300, 
        icon: windows
    },
    {
        id: 2,
        title: "EA SPORTS™ FIFA 23",
        image: fifa,
        releaseDate: "30 сен. 2022",
        description: "В FIFA 23 всемирная игра становится еще лучше с технологией HyperMotion2, мужским и женским FIFA World Cup™, женскими командами, кроссплатформенной игрой и множеством прочих возможностей.",
        price: 300, 
        icon: windows
    },
    {
        id: 3,
        title: "Ведьмак: Дикая Охота",
        image: ved,
        releaseDate: "18 мая 2015",
        description: "Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира.",
        price: 300, 
        icon: windows
    }
];

const Games = () => {
    const [games, setGames] = useState(initialGames);

    const handleDelete = (id) => {
        setGames(games.filter(game => game.id !== id));
    };

    // Вычисление общей стоимости до возврата JSX
    const totalPrice = games.reduce((total, game) => total + game.price, 0);

    return (
        <>
            <Oval>Ваша корзина</Oval>
            {games.map(game => (
                <Container_my key={game.id}>
                    <BigImage src={game.image} alt={`Игра ${game.title}`} />
                    <div>
                        <Title1>{game.title}</Title1>
                        <SmallImage src={game.icon} alt="Иконка Виндоус" />
                        <Price>{game.price} руб.</Price> 
                        <Title2>Дата выпуска: {game.releaseDate}</Title2>
                        <Title3>{game.description}</Title3>
                        <Delete onClick={() => handleDelete(game.id)}>Удалить</Delete>
                        <Hr />
                    </div>
                </Container_my>
            ))}
            <Total>
                <TotalSpan>Промежуточный итог:</TotalSpan>
                <Price1>{totalPrice} руб.</Price1>
            </Total>
        </>
    );
};

export default Games;
