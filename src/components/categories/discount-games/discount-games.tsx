import React, { useState, useEffect } from 'react';
import { Title } from "../title";
import { windows, new_game2, sales_game1, sales_game2 } from '.'
import GameCard from '../card/card';
import { ShowMoreBtn } from '../show-more-btn/show-more-btn.styled';

const DiscountGames = ({ sortOption }) => {
  const [games, setGames] = useState([
    { id: 1, title: 'How to Survive', price: 259, old_price: 500, image: sales_game1, os: windows },
    { id: 2, title: 'Red Solstice 2 Survivors', price: 561, image: sales_game2, os: windows },
    { id: 3, title: 'Sons Of The Forests', price: 820, old_price: 1100, image: new_game2, os: windows },
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