import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    windows,
    leaders_game1,
    leaders_game2,
    leaders_game3,
    leaders_game4,
    leaders_game5,
    leaders_game6
} from '../../../../assets/images'
import { TitleRectangle, TitleCategory, Card, BtnMoreStyled, Separator, BigSeparator, TitleGame, CardImg, Windows, FreePrice, NewPrice, OldPrice } from './leaders.styled';
const Leaders = () => {
    const [showCard, setShowCard] = useState(false);
    const handleShowCard = () => {
        setShowCard(!showCard);
    };

    return (
        <div>
            <BigSeparator />
            <BigSeparator />
            <TitleRectangle>
                <TitleCategory>Лидеры продаж</TitleCategory>
            </TitleRectangle>
            <BigSeparator />
            <Link to="/gamehub/game-page">
                <Card>
                    <CardImg src={leaders_game2} alt="Обложка игры Elden Ring" />
                    <TitleGame>Elden Ring</TitleGame>
                    <Windows src={windows} />
                    <NewPrice>990 руб.</NewPrice>
                    <OldPrice>1100 руб.</OldPrice>
                </Card>
            </Link>
            <Separator />
            <Link to="/gamehub/game-page">
                <Card>
                    <CardImg src={leaders_game1} alt="Обложка игры Counter-Strike 2" />
                    <TitleGame>Counter-Strike 2</TitleGame>
                    <Windows src={windows} />
                    <FreePrice>Бесплатно</FreePrice>
                </Card>
            </Link>
            <Separator />

            <Card>
                <CardImg src={leaders_game3} alt="Обложка игры PUBG: BATTLEGROUNDS" />
                <TitleGame>PUBG: BATTLEGROUNDS</TitleGame>
                <Windows src={windows} />
                <FreePrice>Бесплатно</FreePrice>
            </Card>
            <Separator />
            {!showCard && (
                <BtnMoreStyled onClick={handleShowCard}>Показать больше</BtnMoreStyled>
            )}
            {showCard && (
                <>
                    <Card>
                        <CardImg src={leaders_game4} alt="Обложка игры The Witcher 3: Wild Hunt" />
                        <TitleGame>The Witcher 3: Wild Hunt</TitleGame>
                        <Windows src={windows} />
                        <NewPrice>990 руб.</NewPrice>
                        <OldPrice>1200 руб.</OldPrice>
                    </Card>
                    <Separator />
                    <Card>
                        <CardImg src={leaders_game5} alt="Обложка игры Atomic Heart" />
                        <TitleGame>Atomic Heart</TitleGame>
                        <Windows src={windows} />
                        <NewPrice>1200 руб.</NewPrice>
                        <OldPrice>2500 руб.</OldPrice>
                    </Card>
                    <Separator />
                    <Card>
                        <CardImg src={leaders_game6} alt="Обложка игры Crab Game" />
                        <TitleGame>Crab Game</TitleGame>
                        <Windows src={windows} />
                        <NewPrice>600 руб.</NewPrice>
                        <OldPrice>900 руб.</OldPrice>
                    </Card>
                    {/* <BtnMoreStyled onClick={handleShowCard}>Скрыть</BtnMoreStyled> */}
                </>
            )}
        </div>
    );
};

export default Leaders;



