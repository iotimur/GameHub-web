import React from 'react';
import { mortal, windows, ved, fifa } from '../../../../assets/images';
import {
    Oval, Container_my, H1, H2, H3, SmallImage, BigImage, Price, Delete, Hr
} from '../games-in-cart/games.styled';

const Games = () => {
    return (
        <>
            <Oval>Ваша корзина</Oval>
            <Container_my>
                <BigImage src={mortal} alt="Игра Мортал Комбат. Змея." />
                <div>
                    <H1>Mortal Kombat 11</H1>
                    <SmallImage src={windows} alt="Иконка Виндоус" />
                    <Price>300 руб.</Price>
                    <H2>Дата выпуска: 23 апр. 2019</H2>
                    <H3>MORTAL KOMBAT 11 ULTIMATE ВКЛЮЧАЕТ В СЕБЯ БАЗОВУЮ ИГРУ МК11, КОМВАТ РАСК 1, ДОПОЛНЕНИЕ «ПОСЛЕДСТВИЯ» И НЕДАВНО ДОБАВЛЕННЫЙ НАБОР «КОМБАТ 2».</H3>
                    <Delete>Удалить</Delete>
                    <Hr />
                </div>
            </Container_my>

            <Container_my>
                <BigImage src={fifa} alt="Игра Фифа 23." />
                <div>
                    <H1>EA SPORTS™ FIFA 23</H1>
                    <SmallImage src={windows} alt="Иконка Виндоус" />
                    <Price>300 руб.</Price>
                    <H2>Дата выпуска: 30 сен. 2022</H2>
                    <H3>В FIFA 23 всемирная игра становится еще лучше с технологией HyperMotion2, мужским и женским FIFA World Cup™, женскими командами, кроссплатформенной игрой и множеством прочих возможностей.</H3>
                    <Delete>Удалить</Delete>
                    <Hr />
                </div>
            </Container_my>

            <Container_my>
                <BigImage src={ved} alt="Игра в Ведьмака." />
                <div>
                    <H1>Ведьмак: Дикая Охота</H1>
                    <SmallImage src={windows} alt="Иконка Виндоус" />
                    <Price>300 руб.</Price>
                    <H2>Дата выпуска: 18 мая 2015</H2>
                    <H3>Вы — Геральт из Ривии, наемный убийца чудовищ. Вы путешествуете по миру, в котором бушует война и на каждом шагу подстерегают чудовища. Вам предстоит выполнить заказ и найти Цири — Дитя Предназначения, живое оружие, способное изменить облик этого мира.</H3>
                    <Delete>Удалить</Delete>
                </div>
            </Container_my>
        </>
    );
};

export default Games;
