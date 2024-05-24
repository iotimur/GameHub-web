import React from "react";

import {  Card, TitleGame, CardImg, Windows, NewPrice, OldPrice } from './card.styled';
const GameCard = ({ game }) => {
    return (
      <Card>
        <CardImg src={game.image} alt={`Обложка игры ${game.title}`} />
        <TitleGame>{game.title}</TitleGame>
        <Windows src={game.os} />
        <NewPrice>{game.price} руб.</NewPrice>
        {game.old_price && <OldPrice>{game.old_price} руб.</OldPrice>}
      </Card>
    );
  };
  
  export default GameCard;