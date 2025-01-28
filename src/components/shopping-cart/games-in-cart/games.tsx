import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../_data_/slices/cart-games"; // Путь к слайсу корзины
import { useAllGamesQuery } from "../../../_data_/service/main-api"; // Для получения всех игр
import * as images from "../../../assets/Images_main"; // Импортируем изображения
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games";
import { useAddToCartMutation } from "../../../_data_/service/main-api";
import Lottie from "lottie-react";
import emptyCartAnimation from "../../../assets/Images_main/emty basket.json"; // Анимация пустой корзины
import errorAnimation from "../../../assets/Images_main/error_dog.json"; // Анимация ошибки

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
  LottieWrapper,
  AnimationContainer,
  StyledText,
} from "../games-in-cart/games.styled";

const Games: React.FC = () => {
  const dispatch = useDispatch();
  const cartIds = useSelector(getCartGamesSelectors.ids);

  const [modifyCart] = useAddToCartMutation();

  // Запрашиваем все игры
  const {
    isLoading: isGamesLoading,
    data: allGamesData,
    error: gamesError,
  } = useAllGamesQuery();

  if (isGamesLoading) {
    return <Oval>Загрузка...</Oval>;
  }

  // Показываем анимацию ошибки при загрузке данных
  if (gamesError) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={errorAnimation} />
        </LottieWrapper>
        <StyledText>Ошибка загрузки данных...</StyledText>
      </AnimationContainer>
    );
  }
  // Фильтруем игры, чтобы оставить только те, которые есть в корзине
  const gamesInCart =
    allGamesData?.filter((game) => cartIds.includes(game.id)) || [];

  // Подсчет общей стоимости
  // Подсчет общей стоимости
const totalPrice = gamesInCart.reduce((total, game) => {
  const priceNumber = game.price; // Убираем все символы кроме чисел и запятой/точки
  return total + (isNaN(priceNumber) ? 0 : priceNumber);
}, 0);


  // Функция для удаления игры из корзины
  const handleDelete = async (id: number) => {
    const action = "remove"; // Указываем действие

    // Сначала обновляем локальный Redux store, удаляя товар
    dispatch(removeFromCart(id));

    try {
      // Отправляем запрос на сервер для удаления товара
      await modifyCart({ id, action }).unwrap();
    } catch (error) {
      console.error("Ошибка при удалении товара из корзины:", error);

      // Откатываем изменения в Redux, если запрос не удался
      dispatch(addToCart(id));
    }
  };

  // Функция для добавления игры в корзину (на случай, если нужно вернуть товары)
  const handleAdd = (id: number) => {
    dispatch(addToCart(id)); // Добавляем товар в корзину
  };

  return (
    <>
      <Oval>Ваша корзина</Oval>
      {gamesInCart.length === 0 ? (
        <AnimationContainer style={{ textAlign: "center" }}>
          <LottieWrapper>
            <Lottie animationData={emptyCartAnimation} />
          </LottieWrapper>
          <StyledText>Ваша корзина пуста...</StyledText>
        </AnimationContainer>
      ) : (
        <>
          {gamesInCart.map((game) => (
            <Container_my key={game.id}>
              <BigImage src={images[game.imgPath]} alt={game.title} />
              <div>
                <Title1>{game.title}</Title1>
                <Price>{game.price} ₽</Price>
                <Title2>Категория: {game.category}</Title2>
                <Title3>{game.description}</Title3>
                <Delete onClick={() => handleDelete(game.id)}>Удалить</Delete>
                <Hr />
              </div>
            </Container_my>
          ))}
          <Total>
            <TotalSpan>Промежуточный итог:</TotalSpan>
            <Price1>{totalPrice.toFixed(2)} ₽</Price1> {/* Добавлен знак рубля */}
          </Total>
        </>
      )}
    </>
  );
};

export default Games;
