import React from 'react';
import { mortal, windows, ved, fifa } from './index';
import {
    Oval, Container_my, Title1, Title2, Title3, SmallImage, BigImage, Price, Delete, Hr
} from '../games-in-cart/games.styled';

const Games = () => {
    return (
        <>
            <Oval>Ваша корзина</Oval>
            <Container_my>
                <BigImage src={mortal} alt="Игра Мортал Комбат. Змея." />
                <div>
                    <Title1>Mortal Kombat 11</Title1>
                    <SmallImage src={windows} alt="Иконка Виндоус" />
                    <Price>300 руб.</Price>
                    <Title2>Дата выпуска: 23 апр. 2019</Title2>
                    <Title3>MORTAL KOMBAT 11 ULTIMATE ВКЛЮЧАЕТ В СЕБЯ БАЗОВУЮ ИГРУ МК11, КОМВАТ РАСК 1, ДОПОЛНЕНИЕ «ПОСЛЕДСТВИЯ» И НЕДАВНО ДОБАВЛЕННЫЙ НАБОР «КОМБАТ 2».</Title3>
                    <Delete>Удалить</Delete>
                    <Hr />
                </div>
            </Container_my>

            <Container_my>
                <BigImage src={fifa} alt="Игра Фифа 23." />
                <div>
                    <Title1>EA SPORTS™ FIFA 23</Title1>
                    <SmallImage src={windows} alt="Иконка Виндоус" />
                    <Price>300 руб.</Price>
                    <Title2>Дата выпуска: 30 сен. 2022</Title2>
                    <Title3>В FIFA 23 всемирная игра становится еще лучше с технологией HyperMotion2, мужским и женским FIFA World Cup™, женскими командами, кроссплатформенной игрой и множеством прочих возможностей.</Title3>
                    <Delete>Удалить</Delete>
                    <Hr />
                </div>
            </Container_my>

            <Container_my>
                <BigImage src={ved} alt="Игра в Ведьмака." />
                <div>
                    <Title1>Ведьмак: Дикая Охота</Title1>
                    <SmallImage src={windows} alt="Иконка Виндоус" />
                    <Price>300 руб.</Price>
                    <Title2>Дата выпуска: 18 мая 2015</Title2>
                    <Title3>Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира.</Title3>
                    <Delete>Удалить</Delete>
                </div>
            </Container_my>
        </>
    );
};

export default Games;



