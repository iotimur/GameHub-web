import React from 'react';

// import '../../../css/game_page.css'
import { logo } from './index'

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

// Импортируйте изображение логотипа (если необходимо)

const PriceBlock: React.FC = () => {
    return (
        <PriceBlockContainer>
            <AdditionalRectangle>
                <Discount>-8%</Discount>
            </AdditionalRectangle>
            <PriceDetails>
                <PriceNew>3295руб/</PriceNew>
                <PriceOld>3599руб</PriceOld>
            </PriceDetails>
            <PriceImage>
                {/* Изображение логотипа */}
            </PriceImage>
            <PriceRectangle>
                <PriceText>В корзину</PriceText>
            </PriceRectangle>
        </PriceBlockContainer>
    );
}

export default PriceBlock;

