import React, { useState, useEffect } from 'react';

import { windows, new_game1, new_game2, new_game3 } from '.'
import GameCard from '../card/card';
import { Title } from '../title';
import { ShowMoreBtn } from '../show-more-btn/show-more-btn.styled';
import  {games2} from '../../../../stubs/json/games.json'
// import BtnMore from '../show-more-btn/show-more-btn';
const NewGames = ({ sortOption }) => {
  // const [games, setItems] = useState([
  //   { id: 4, title: 'Alpha League', price: 299, image: new_game1, os: windows },
  //   { id: 5, title: 'Sons Of The Forests', price: 820, old_price: 1100, image: new_game2, os: windows },
  //   { id: 6, title: 'Pacific Drives', price: 1799, image: new_game3, os: windows },]);
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