import React from "react";
import * as images from "../../../assets/Images_main";
import { Card, TitleGame, CardImg, Windows, NewPrice, OldPrice } from './card.styled';

const GameCard = ({ game }) => {
  // Генерация изображений на основе данных
  const generateImages = (data) =>
    data.reduce((acc, item) => {
      acc[item.image] = images[item.imgPath]; // Связываем имена с импортированными изображениями
      return acc;
    }, {});

  // Проверка наличия game
  if (!game) {
    return <div>No game found</div>;
  }

  const gameImages = generateImages([game]); // Передаем game как массив

  return (
    
    <Card>
      <CardImg src={gameImages[game.image]} alt={`Обложка игры ${game.name}`} />
      <TitleGame>{game.name}</TitleGame>
      <NewPrice>{game.text}</NewPrice>
      {game.old_price && <OldPrice>{game.old_price} руб.</OldPrice>}
    </Card>
  );
};

export default GameCard;
