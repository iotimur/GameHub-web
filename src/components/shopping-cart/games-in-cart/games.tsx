import React from "react";
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
import { useGamesInCartQuery } from "../../../_data_/service/main-api";
import { fifa, ved, mortal } from "../../../assets/images";

const images = {
  mortal: mortal,
  fifa: fifa,
  ved: ved,
};

const Games: React.FC = () => {
  const { data, isLoading, error } = useGamesInCartQuery();

  if (isLoading) {
    return <Oval>Загрузка...</Oval>;
  }

  if (error || !data?.success) {
    return <Oval>Ошибка загрузки данных</Oval>;
  }

  const games = data.data;

  const handleDelete = (id: number) => {
    console.log(`Удалить игру с ID: ${id}`);
  };

  const totalPrice = games.reduce((total, game) => total + game.price, 0);

  return (
    <>
      <Oval>Ваша корзина</Oval>
      {games.map((game) => (
        <Container_my key={game.id}>
          <BigImage src={images[game.image]} alt={game.alt} />
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