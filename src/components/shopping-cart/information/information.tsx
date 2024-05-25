import React from 'react';
import {  Info, Title4, NDS, Oval1, Hr } from '../information/information.styled';

const Information = () => {
    return (
        <>
        <div>
            <Hr/>
            <NDS>НДС: Все цены указаны с учетом НДС (где применимо)</NDS>
            <Info>
            <Title4><span>Способ получения</span></Title4>
                <Title4><span>Способ оплаты</span></Title4>
            </Info>  
            <Oval1>Купить</Oval1>
            </div>               
           
        </>
    );
};

export default Information;

