import React from 'react';

import {
    windows,
    new_game2,
    sales_game1,
    sales_game2
} from '../../../../assets/images'
import { TitleRectangle, TitleCategory, Card, BtnMoreStyled, Separator, BigSeparator, TitleGame, CardImg, Windows, NewPrice, OldPrice } from '../leaders/leaders.styled';
const DiscountGames = () => {
    return (
        <div>
            <BigSeparator/>
            <BigSeparator/>
            <TitleRectangle>
                <TitleCategory>Скидки</TitleCategory>
            </TitleRectangle>
            <BigSeparator />
            <Card>
                <CardImg src={sales_game1} alt="Обложка игры How to Survive" />
                <TitleGame>How to Survive</TitleGame>
                <Windows src={windows} />
                <NewPrice>259 руб.</NewPrice>
                <OldPrice>500 руб.</OldPrice>
            </Card>
            <Separator />
            <Card>
                <CardImg src={sales_game2} alt="Обложка игры Red Solstice 2 Survivors" />
                <TitleGame>Red Solstice 2 Survivors</TitleGame>
                <Windows src={windows} />
                <NewPrice>561 руб.</NewPrice>
            </Card>
            <Separator />
            <Card>
                <CardImg src={new_game2} alt="Обложка игры Sons Of The Forests" />
                <TitleGame>Sons Of The Forests</TitleGame>
                <Windows src={windows} />
                <NewPrice>820 руб.</NewPrice>
                <OldPrice>1100 руб.</OldPrice>
            </Card>
            <Separator />
            <BtnMoreStyled>
                Показать больше
            </BtnMoreStyled>
            <BigSeparator />
            <BigSeparator />

        </div>

    );
};

export default DiscountGames;