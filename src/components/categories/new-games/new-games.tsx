import React, { useState, useEffect } from 'react';

import GameCard from '../card/card';
import { Title } from '../title';
import { ShowMoreBtn } from '../show-more-btn/show-more-btn.styled';
import  {games2} from '../../../../stubs/json/categories/games.json'
const NewGames = ({ sortOption }) => {
  const [games, setGames] = useState(games2);
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
      <Title text="Новинки" />
      {games.map((game) => (
        <div key={game.id}>
          <GameCard game={game} />
        </div>
      ))}
      <ShowMoreBtn>Показать больше</ShowMoreBtn>
    </div>
  );
};
export default NewGames;