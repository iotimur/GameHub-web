import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { windows,leaders_game1,leaders_game2,leaders_game3,leaders_game4,leaders_game5,leaders_game6} from '.'
import { TitleRectangle, TitleCategory, Card, BtnMoreStyled, Separator, BigSeparator, TitleGame, CardImg, Windows, NewPrice, OldPrice } from './leaders.styled';
const Leaders = ({ sortOption }) => {
    const [games, setGames] = useState([
        { id: 1, title: 'Elden Ring', price: 990, old_price: 1100, image: leaders_game2, os: windows },
        { id: 2, title: 'Counter-Strike 2', price: 279, image: leaders_game1, os: windows },
        { id: 3, title: 'PUBG: BATTLEGROUNDS', price: 199, image: leaders_game3, os: windows },
    ]);

    useEffect(() => {
        const sortedGames = [...games];
        if (sortOption === 'по цене max') {
            sortedGames.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'по цене min') {
            sortedGames.sort((a, b) => a.price - b.price);
        }
        setGames(sortedGames);
    }, [sortOption, games]);

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
            {games.map((game) => (
                <div key={game.id}>
                    <Link to={game.id === 1 ? "/gamehub/game-page" : "#"}>
                        <Card>
                            <CardImg src={game.image} alt={`Обложка игры ${game.title}`} />
                            <TitleGame>{game.title}</TitleGame>
                            <Windows src={game.os} />
                            <NewPrice>{game.price} руб.</NewPrice>
                            {game.old_price && <OldPrice>{game.old_price} руб.</OldPrice>}
                        </Card>
                    </Link>
                    <Separator />
                </div>
            ))}
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
                </>
            )}
        </div>
    );
};

export default Leaders;



