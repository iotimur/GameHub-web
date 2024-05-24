import React from 'react';
import {  Info, Title4, NDS, Oval1, Oval2, Hr } from '../information/information.styled';

const Information = () => {
    return (
        <>
            <Hr/>
            <NDS>НДС: Все цены указаны с учетом НДС (где применимо)</NDS>
            <Info>
            <Title4><span>Способ получения</span></Title4>
                <Title4><span>Способ оплаты</span></Title4>
            </Info>  
            <Oval1>Купить для себя</Oval1>
            <Oval2>Купить в подарок</Oval2>                       
           
        </>
    );
};

export default Information;

