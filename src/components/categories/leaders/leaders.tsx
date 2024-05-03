import React from 'react';

import { windows, leaders_game1, leaders_game2, leaders_game3 } from '../../../../assets/images'
import { TitleRectangle, TitleCategoryStyled, Card, BtnMoreStyled, Separator, BigSeparator, TitleGame, CardImg, Windows, FreePrice, NewPrice, OldPrice } from './leaders.styled';
const Leaders = () => {
    return (
        <div>
            <TitleRectangle>
                <TitleCategoryStyled>Лидеры продаж</TitleCategoryStyled>
            </TitleRectangle>
            <BigSeparator />
            <Card>
                <CardImg src={leaders_game2} alt="Обложка игры Elden Ring" />
                <TitleGame>Elden Ring</TitleGame>
                <Windows src={windows} />
                <NewPrice>990 руб.</NewPrice>
                <OldPrice>1100 руб.</OldPrice>
            </Card>
            <Separator />
            <Card>
                <CardImg src={leaders_game1} alt="Обложка игры Counter-Strike 2" />
                <TitleGame>Counter-Strike 2</TitleGame>
                <Windows src={windows} />
                <FreePrice>Бесплатно</FreePrice>
            </Card>
            <Separator />

            <Card>
                <CardImg src={leaders_game3} alt="Обложка игры PUBG: BATTLEGROUNDS" />
                <TitleGame>PUBG: BATTLEGROUNDS</TitleGame>
                <Windows src={windows} />
                <FreePrice>Бесплатно</FreePrice>
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

export default Leaders;