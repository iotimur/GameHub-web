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
import { useGamesInCartQuery } from "../../../_data_/service/main-api";
import { fifa, ved, mortal } from "../../../assets/images";

const images = {
  mortal: mortal,
  fifa: fifa,
  ved: ved,
};

const Games: React.FC = () => {
  const { isFetching, isLoading, data, error } = useGamesInCartQuery();
  const [games, setGames] = useState([]); // Локальное состояние для списка игр

  // Сохраняем данные из запроса в состояние
  useEffect(() => {
    if (data) {
      setGames(data);
    }
  }, [data]);

  if (isLoading) {
    return <Oval>Загрузка...</Oval>;
  }

  if (error) {
    return <Oval>Ошибка загрузки данных</Oval>;
  }

  // Удаление игры из состояния
  const handleDelete = (id: number) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  // Подсчёт общей стоимости
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