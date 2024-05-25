import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../card/card';
import { Title } from '../title';
import { ShowMoreBtn } from '../show-more-btn/show-more-btn.styled';
import  {games3,games4} from '../../../../stubs/json/categories/games.json'

const Leaders = ({ sortOption }) => {
    const [games, setGames] = useState(games3);
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



