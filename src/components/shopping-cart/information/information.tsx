import React from 'react';
import { Delete1, Total, TotalSpan, Info, H4, NDS, Oval1, Oval2, Price1, Hr } from '../information/information.styled';

const Information = () => {
    return (
        <>
            <Total>
                <TotalSpan>Промежуточный итог:</TotalSpan>
                <Price1>900 руб.</Price1>
            </Total>
            <Hr/>
            <Info>
                <H4>Способ получения</H4>
                <H4>Способ оплаты</H4>
            </Info>
            <Oval1>Купить для себя</Oval1>
            <Oval2>Купить в подарок</Oval2>
            <Delete1>
                Удалить все товары
            </Delete1>
            <NDS>НДС: Все цены указаны с учетом НДС (где применимо)</NDS>
        </>
    );
};

export default Information;

