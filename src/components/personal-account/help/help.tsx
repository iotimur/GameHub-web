import React from 'react';
import { BlockHelpStyled, LinksStyled, TextHelpStyled, TextStyled, TextZagolovkaStyled } from './help.styled'

export function Help() {
    return (
        <BlockHelpStyled>
            <div className="top">
                <TextHelpStyled>Помощь</TextHelpStyled>
            </div>
            <hr />
            <div className="d-flex">
                <LinksStyled>
                    <TextZagolovkaStyled>Оформление заказа</TextZagolovkaStyled>
                    <TextStyled>Выберите товары и добавьте их в корзину. Оформите заказ. Подтвердите и оплатите заказ.</TextStyled>
                    <TextZagolovkaStyled>Способы оплаты</TextZagolovkaStyled>
                    <TextStyled>Банковская карта или электронный кошелёк.</TextStyled>
                    <TextZagolovkaStyled>Изменение личных данных</TextZagolovkaStyled>
                    <TextStyled>Вот некоторые данные, которые можно изменить в профиле: имя, фамилия, номер телефона, электронная почта.</TextStyled>
                    <TextZagolovkaStyled>Добавление товара в корзину</TextZagolovkaStyled>
                    <TextStyled>Чтобы добавить товар в корзину, нажмите кнопку «Купить для себя» или «Купить в подарок» на карточке товара.</TextStyled>
                </LinksStyled>
            </div>
        </BlockHelpStyled>
    );
}

