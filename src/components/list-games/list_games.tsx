import GameCard from "../categories/card/card";
import { Card, TitleGame, CardImg, Windows, NewPrice, OldPrice } from './list_games.styled';

const ListGames = (props) => {
  const generateImages = (data) =>
    data.reduce((acc, item) => {
      acc[item.image] = images[item.imgPath]; // Связываем имена с импортированными изображениями
      return acc;
    }, {});

  const imagesTopSail = generateImages(data.topSail);

  return <GameCard game={game} />;
};

export default ListGames;
