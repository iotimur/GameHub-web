import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BlockPurchasesStyled, Lin, ShopsStyled, AddStyled, TextZagolStyled, ImageStyled, TextGameStyled, TextBlockStyled, DFlexStyled } from './my-purchases.styled';
import { Link } from 'react-router-dom';
import { game11, game22, game33, game44, game55, game66 } from './index';

const initialPurchases = [
    { id: 1, image: game11, date: '18.01.24', sum: '300 руб.', status: 'оплачено' },
    { id: 2, image: game22, date: '18.01.24', sum: '300 руб.', status: 'оплачено' },
    { id: 3, image: game33, date: '20.01.24', sum: '450 руб.', status: 'оплачено' },
    { id: 4, image: game44, date: '22.01.24', sum: '200 руб.', status: 'оплачено' },
    { id: 5, image: game55, date: '25.01.24', sum: '500 руб.', status: 'оплачено' },
    { id: 6, image: game66, date: '28.01.24', sum: '350 руб.', status: 'оплачено' },
];

export function MyPurchases() {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedPurchases = isExpanded ? initialPurchases : initialPurchases.slice(0, 2);

    const buttonText = isExpanded ? t('my_purchases_show_less') : t('my_purchases_show_more');

    return (
        <BlockPurchasesStyled>
            <div className="top">
                <TextZagolStyled>{t('my_purchases_title')}</TextZagolStyled>
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
                                {t('my_purchases_date')}: {purchase.date} <br />
                                {t('my_purchases_amount')}: {purchase.sum} <br />
                                {t('my_purchases_status')}: {purchase.status}
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
