import React from 'react';
import { BlockPurchasesStyled, ShopsStyled, AddStyled, TextZagolStyled, ImageStyled, TextGameStyled, TextBlockStyled, DFlexStyled } from './my-purchases.styled'

import { game11, game22 } from './index'

export function MyPurchases() {
    return (
        <BlockPurchasesStyled>
            <div className="top">
                <TextZagolStyled>Мои покупки</TextZagolStyled>
            </div>
            <hr />
            <ShopsStyled>
                <DFlexStyled>
                    <div>
                        <ImageStyled src={game11} alt="game1_photo" />
                    </div>

                    <TextBlockStyled>
                        <TextGameStyled>Дата покупки: 18.01.24 <br />Сумма: 300 руб. <br /> Статус: оплачено</TextGameStyled>
                    </TextBlockStyled>
                    <div>
                        <ImageStyled src={game22} alt="game2_photo" />
                    </div>
                    <TextBlockStyled>
                        <TextGameStyled>Дата покупки: 18.01.24 <br />Сумма: 300 руб. <br /> Статус: оплачено</TextGameStyled>
                    </TextBlockStyled>
                </DFlexStyled>
            </ShopsStyled>
            <div className="bott">
                <AddStyled>Показать еще</AddStyled>
            </div>
        </BlockPurchasesStyled>
    );
}

