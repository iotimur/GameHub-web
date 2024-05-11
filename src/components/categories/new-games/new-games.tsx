import React from 'react';

import {
    windows,
    new_game1,
    new_game2,
    new_game3
} from '../../../../assets/images'
import {
    TitleRectangle,
    TitleCategory,
    Card,
    BtnMoreStyled,
    Separator,
    BigSeparator,
    TitleGame,
    CardImg,
    Windows,
    FreePrice,
    NewPrice,
    OldPrice
} from '../leaders/leaders.styled';
const NewGames = () => {
    return (
        <div>
            <BigSeparator />
            <BigSeparator />
            <TitleRectangle>
                <TitleCategory>Новинки</TitleCategory>
            </TitleRectangle>
            <BigSeparator />

            <Card>
                <CardImg src={new_game1} alt="Обложка игры Alpha League" />
                <TitleGame>Alpha League</TitleGame>
                <Windows src={windows} />
                <FreePrice>Бесплатно</FreePrice>
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
            <Card>
                <CardImg src={new_game3} alt="Обложка игры Pacific Drives" />
                <TitleGame>Pacific Drives</TitleGame>
                <Windows src={windows} />
                <NewPrice>1799 руб.</NewPrice>
            </Card>
            <Separator />
            <BtnMoreStyled>
                Показать больше
            </BtnMoreStyled>
        </div>

    );
};

export default NewGames;