import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { windows, leaders_game1, leaders_game2, leaders_game3, leaders_game4, leaders_game5, leaders_game6 } from '.'
import GameCard from '../card/card';
import { Title } from '../title';
import { ShowMoreBtn } from '../show-more-btn/show-more-btn.styled';
import  {games3,games4} from '../../../../stubs/json/games.json'

const Leaders = ({ sortOption }) => {
    // const [games, setGames] = useState([
    //     { id: 1, title: 'Elden Ring', price: 990, old_price: 1100, image: leaders_game2, os: windows },
    //     { id: 2, title: 'Counter-Strike 2', price: 279, image: leaders_game1, os: windows },
    //     { id: 3, title: 'PUBG: BATTLEGROUNDS', price: 199, image: leaders_game3, os: windows },
    // ]);
    const [games1, setGames1] = useState(games3);
  
    // const [games4] = useState([
    //     { id: 4, title: 'The Witcher 3: Wild Hunt', price: 990, old_price: 1200, image: leaders_game4, os: windows },
    //     { id: 5, title: 'Atomic Heart', price: 1200, old_price: 2500, image: leaders_game5, os: windows },
    //     { id: 6, title: 'Crab Game', price: 600, old_price: 890, image: leaders_game6, os: windows },
    // ]);
    const [games2, setGames2] = useState(games4);
    useEffect(() => {
        const sortedGames = [...games1];
        if (sortOption === 'по цене max') {
          sortedGames.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'по цене min') {
          sortedGames.sort((a, b) => a.price - b.price);
        }
        setGames1(sortedGames);
      }, [sortOption, games1]);
    const [showCard, setShowCard] = useState(false);
    const handleShowMore = () => {
        setShowCard(true);
    };

    return (
        <div>
            <Title text="Лидеры продаж" />
            {games3.map((game) => (
                <div key={game.id}>
                    <Link to={game.id === 1 ? "/gamehub/game-page" : "#"}>
                        <GameCard game={game} />
                    </Link>
                </div>
            ))}
            {!showCard && (
                <ShowMoreBtn onClick={handleShowMore}>Показать больше</ShowMoreBtn>
            )}
            {showCard && (
                <>
                    {games4.map((game) => (
                        <div key={game.id}>
                            <GameCard game={game} />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Leaders;



