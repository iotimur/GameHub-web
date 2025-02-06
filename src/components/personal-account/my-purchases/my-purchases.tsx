import React, { useState } from 'react';
import { BlockPurchasesStyled, Lin, ShopsStyled, AddStyled, TextZagolStyled, ImageStyled, TextGameStyled, TextBlockStyled, DFlexStyled } from './my-purchases.styled'
import { Link } from 'react-router-dom';
import { game11, game22, game33, game44, game55, game66 } from './index' // Добавил больше игр

const initialPurchases = [
    { id: 1, image: game11, date: '18.01.24', sum: '300 руб.', status: 'оплачено' },
    { id: 2, image: game22, date: '18.01.24', sum: '300 руб.', status: 'оплачено' },
    { id: 3, image: game33, date: '20.01.24', sum: '450 руб.', status: 'оплачено' },
    { id: 4, image: game44, date: '22.01.24', sum: '200 руб.', status: 'оплачено' },
    { id: 5, image: game55, date: '25.01.24', sum: '500 руб.', status: 'оплачено' },
    { id: 6, image: game66, date: '28.01.24', sum: '350 руб.', status: 'оплачено' },
];

export function MyPurchases() {
    const [isExpanded, setIsExpanded] = useState(false); // Состояние для развернутого/свернутого

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedPurchases = isExpanded ? initialPurchases : initialPurchases.slice(0, 2); // Показываем 2, если не развернуто

    const buttonText = isExpanded ? 'Показать меньше' : 'Показать больше';

    return (
        <BlockPurchasesStyled>
            <div className="top">
                <TextZagolStyled>Мои покупки</TextZagolStyled>
            </div>
            <Lin />
            <ShopsStyled>
                {displayedPurchases.map(purchase => (
                    <div key={purchase.id}>
                        <Link to="/gamehub/game-page">
                            <div>
                                <ImageStyled src={purchase.image} alt={`game${purchase.id}_photo`} />
                            </div>
                        </Link>
                        <TextBlockStyled>
                            <TextGameStyled>
                                Дата покупки: {purchase.date} <br />
                                Сумма: {purchase.sum} <br />
                                Статус: {purchase.status}
                            </TextGameStyled>
                        </TextBlockStyled>
                    </div>
                ))}
            </ShopsStyled>
            <div className="bott">
                <AddStyled onClick={toggleExpand}>{buttonText}</AddStyled>
            </div>
        </BlockPurchasesStyled>
    );
}