import React, { useState, useEffect } from "react";
import {
  Oval,
  Container_my,
  Title1,
  Title2,
  Title3,
  BigImage,
  Price,
  Delete,
  Hr,
  Total,
  TotalSpan,
  Price1,
} from "../games-in-cart/games.styled";
import data from "../../../../stubs/json/shopping-cart/success.json";
import { fifa, ved, mortal } from "../../../assets/images";

interface Game {
  id: number;
  title: string;
  image: string; // Здесь предполагается, что image - это ключ для объекта images
  alt: string;
  releaseDate: string;
  description: string;
  price: number;
}

const images = {
  mortal: mortal,
  fifa: fifa,
  ved: ved,
};

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(data.data);
  }, []);

  const handleDelete = (id: number) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const totalPrice = games.reduce((total, game) => total + game.price, 0);

  return (
    <>
      <Oval>Ваша корзина</Oval>
      {games.map((game) => (
        <Container_my key={game.id}>
          <BigImage src={images[game.image]} alt={game.alt} />{" "}
          {/* Используем объект images для получения изображения */}
          <div>
            <Title1>{game.title}</Title1>
            <Price>{game.price} руб.</Price>
            <Title2>Дата выпуска: {game.releaseDate}</Title2>
            <Title3>{game.description}</Title3>
            <Delete onClick={() => handleDelete(game.id)}>Удалить</Delete>
            <Hr />
          </div>
        </Container_my>
      ))}
      <Total>
        <TotalSpan>Промежуточный итог:</TotalSpan>
        <Price1>{totalPrice} руб.</Price1>
      </Total>
    </>
  );
};

export default Games;
