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
  PromoCodeContainer,
  PromoCodeInput,
  ApplyButton,
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
  const [promoCode, setPromoCode] = useState(""); // Локальное состояние для промокода
  const [totalPrice, setTotalPrice] = useState(0); // Локальное состояние для общей стоимости

  // Сохраняем данные из запроса в состояние
  useEffect(() => {
    if (data) {
      setGames(data);
    }
  }, [data]);

  // Пересчет общей стоимости при изменении списка игр
  useEffect(() => {
    const price = games.reduce((total, game) => total + game.price, 0);
    setTotalPrice(price); // Установка общей стоимости
  }, [games]);

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

  // Обработка применения промокода
  const handleApplyPromoCode = () => {
    if (promoCode === "10") {
      const discount = totalPrice * 0.1; // Скидка 10%
      const newTotalPrice = totalPrice - discount; // Новая общая стоимость
      console.log("Промокод применен: скидка 10%, новая цена:", newTotalPrice);
      setTotalPrice(newTotalPrice); // Обновляем состояние с новой ценой
    } else {
      console.log("Недействительный промокод");
    }
    
    setPromoCode(""); // Очистка поля после применения
  };

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
      <PromoCodeContainer>
        <PromoCodeInput
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Введите промокод"
        />
        <ApplyButton onClick={handleApplyPromoCode}>Применить</ApplyButton>
      </PromoCodeContainer>

      <Total>
        <TotalSpan>Промежуточный итог:</TotalSpan>
        <Price1>{totalPrice} руб.</Price1>
      </Total>
    </>
  );
};

export default Games;
