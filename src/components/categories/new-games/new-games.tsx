import React, { useState, useEffect } from 'react';

import { windows, new_game1, new_game2, new_game3 } from '.'
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
  NewPrice,
  OldPrice
} from '../leaders/leaders.styled';
const NewGames = ({ sortOption }) => {
  const [games, setItems] = useState([
    { id: 4, title: 'Alpha League', price: 299, image: new_game1, os: windows },
    { id: 5, title: 'Sons Of The Forests', price: 820, old_price: 1100, image: new_game2, os: windows },
    { id: 6, title: 'Pacific Drives', price: 1799, image: new_game3, os: windows },]);

  useEffect(() => {
    const sortedItems = [...games];
    if (sortOption === 'по цене max') {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'по цене min') {
      sortedItems.sort((a, b) => a.price - b.price);
    }
    setItems(sortedItems);
  }, [sortOption, games]);
  return (
    <div>
      <BigSeparator />
      <BigSeparator />
      <TitleRectangle>
        <TitleCategory>Новинки</TitleCategory>
      </TitleRectangle>
      <BigSeparator />
      {games.map((game) => (
        <div key={game.id}>
          <Card>
            <CardImg src={game.image} alt={`Обложка игры ${game.title}`} />
            <TitleGame>{game.title}</TitleGame>
            <Windows src={game.os} />
            <NewPrice>{game.price} руб.</NewPrice>
            {game.old_price && <OldPrice>{game.old_price} руб.</OldPrice>}
          </Card>
          <Separator />
        </div>
      ))}
      <BtnMoreStyled>
        Показать больше
      </BtnMoreStyled>
      <BigSeparator />
      <BigSeparator />
    </div>
  );
};
export default NewGames;