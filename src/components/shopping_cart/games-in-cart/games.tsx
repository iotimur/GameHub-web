import React from 'react';
import { cmc, f1, f2, f3, f4, mortal, windows, ved, fifa } from '../../../../assets/images';
import {
    Oval, Oval1, Oval2, Container_my, H1, H2, H3, SmallImage, Price, Delete
} from '../games-in-cart/games.styled';


const Games = () => {
    return (
        <>
            
            <Oval>Ваша корзина</Oval>
            {/* Использование стиля Container_my */}
            <Container_my>
                {/* ... Другие элементы внутри Container_my */}
                {/* Использование стиля H1 */}
                <H1>Mortal Kombat 11</H1>
                {/* Использование стиля SmallImage с передачей src и alt */}
                <SmallImage src={windows} alt="Иконка Виндоус" />
                {/* Использование стиля Price */}
                <Price>300 руб.</Price>
                {/* ... Другие элементы внутри Container_my */}
                {/* Использование стиля Delete */}
                <Delete>Удалить</Delete>
                {/* ... Другие элементы внутри Container_my */}
            </Container_my>
            {/* ... Другие элементы вне Container_my */}
        </>
    );
};

export default Games;



