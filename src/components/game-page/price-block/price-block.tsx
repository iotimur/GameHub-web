import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
    PriceBlockContainer,
    PriceImage,
    PriceRectangle,
    PriceText,
    AdditionalRectangle,
    Discount,
    PriceDetails,
    PriceOld,
    PriceNew
} from './price-block.styled';

const PriceBlock: React.FC = () => {
    const { t } = useTranslation();

    return (
        <PriceBlockContainer>
            <AdditionalRectangle>
                <Discount>{t('price.discount')}</Discount>
            </AdditionalRectangle>
            <PriceDetails>
                <PriceNew>{t('price.newPrice')}</PriceNew>
                <PriceOld>{t('price.oldPrice')}</PriceOld>
            </PriceDetails>
            <PriceImage>
                {/* Изображение логотипа */}
            </PriceImage>
            <Link to="/gamehub/shopping-cart">
                <PriceRectangle>
                    <PriceText>{t('price.addToCart')}</PriceText>
                </PriceRectangle>
            </Link>
        </PriceBlockContainer>
    );
}

export default PriceBlock;
