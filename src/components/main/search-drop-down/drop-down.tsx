import React from "react";
import * as images from "../../../assets/Images_main";

import {
  DropdownItem,
  DropdownImage,
  DropdownText,
  DropdownWrapper,
} from "./drop-down.styled";

export const SearchWithDropdown = ({ ids, allGames }) => {
  // Генерация объекта изображений на основе JSON данных
  const generateImages = (data) =>
    data.reduce((acc, item) => {
      acc[item.id] = images[item.imgPath] || null; // Привязываем изображение по id
      return acc;
    }, {});

  const gameImages = generateImages(allGames);

  // Отфильтруем игры по id и ограничим первые пять
  const filteredGames = allGames.filter((game) => ids.includes(game.id)).slice(0, 5);

  return (
    <DropdownWrapper>
      {filteredGames.map((game) => (
        <DropdownItem key={game.id}>
          <DropdownImage src={gameImages[game.id]} alt={game.name} />
          <DropdownText>
            <h4>{game.title}</h4>
            <p>{game.description}</p>
          </DropdownText>
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};
