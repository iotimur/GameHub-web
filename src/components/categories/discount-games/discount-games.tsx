import React, { useState, useEffect } from 'react';
import { Title } from "../title";

import GameCard from '../card/card';
import { ShowMoreBtn } from '../show-more-btn/show-more-btn.styled';
import  {games1} from '../../../../stubs/json/categories/games.json'

const DiscountGames = ({ sortOption }) => {
  const [games, setGames] = useState(games1);
  useEffect(() => {
    const sortedGames = [...games];
    if (sortOption === 'по цене max') {
      sortedGames.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'по цене min') {
      sortedGames.sort((a, b) => a.price - b.price);
    }
    setGames(sortedGames);
  }, [sortOption, games]);

  return (
    <div>
      <Title text="Скидки" />
      {games.map((game) => (
        <div key={game.id}>
          <GameCard game={game} />
        </div>
      ))}
      <ShowMoreBtn>Показать больше</ShowMoreBtn>
      <div style={{ height: '20px'}}></div>
    </div>
  );
};

export default DiscountGames;