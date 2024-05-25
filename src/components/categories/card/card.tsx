import React from "react";

import {  Card, TitleGame, CardImg, Windows, NewPrice, OldPrice } from './card.styled';
import * as gameImg from '../discount-games/index'
const GameCard = ({ game }) => {
    return (
      <Card>
        <CardImg src={gameImg[game.image]} alt={`Обложка игры ${game.title}`}/>
        <TitleGame>{game.title}</TitleGame>
        <Windows src={gameImg[game.os]} />
        <NewPrice>{game.price} руб.</NewPrice>
        {game.old_price && <OldPrice>{game.old_price} руб.</OldPrice>}
      </Card>
    );
  };
  
  export default GameCard;