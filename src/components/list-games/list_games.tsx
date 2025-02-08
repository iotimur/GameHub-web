import React, { useState } from "react";
import GameCard from "./card/card";
import { Title } from "./title/title";
import { useTranslation } from 'react-i18next';
import {
  ContainerMain,
  CommonMain,
} from "../main/main-container/main.styled";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAddToCartMutation } from "../../_data_/service/main-api";
import { mainApi } from "../../_data_/service/main-api";
import * as getHomeSearchSelectors from "../../_data_/selectors/home-app-search";
import * as getCartGamesSelectors from "../../_data_/selectors/cart-games"; // Подключаем селектор корзины
import { cartSlice } from "../../_data_/slices/cart-games";

import somethingWrong from "../../assets/Images_main/something_wrong_cat.json"; // что-то пошло не так
import errorAnimation from "../../assets/Images_main/error_dog.json"; // Анимация ошибки
import nothingFound from "../../assets/Images_main/nothing-found.json";

import Lottie from "lottie-react"; // Импортируем для анимаций

import {
  LottieWrapper,
  AnimationContainer,
  StyledText,
} from "../main/main-container/main.styled";

const ListGames = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [modifyCart] = useAddToCartMutation();
  const allGames = useSelector(getHomeSearchSelectors.allGames);
  const cartIds = useSelector(getCartGamesSelectors.ids); // Получаем список id игр в корзине
  const [isUpdating, setIsUpdating] = useState(false);

  // Запрос для получения всех игр
  const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();

  // Условие для отображения в зависимости от данных
  // Если идет загрузка, показываем анимацию загрузки или текст
  if (isFetching || isLoading) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={somethingWrong} />
        </LottieWrapper>
        <StyledText>{t('main_loading')}</StyledText>
      </AnimationContainer>
    );
  }

  if (error) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={errorAnimation} />
        </LottieWrapper>
        <StyledText>{t('main_error')}</StyledText>
      </AnimationContainer>
    );
  }

  if (!data && !allGames) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={nothingFound} />
        </LottieWrapper>
        <StyledText>{t('main_empty')}</StyledText>
      </AnimationContainer>
    );
  }

  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  // Получаем параметры из URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const ids = query ? query.split(",").map((id) => parseInt(id, 10)) : [];
  const category = searchParams.get("category");

  // Фильтрация по ID и категории
  let filteredGames = allGames; // Переместили это за условие

  if (ids.length > 0) {
    
    filteredGames = filteredGames.filter((game) => ids?.includes(game.id));
  }
  else if (category) {
    filteredGames = filteredGames.filter((game) => game.category === category);
  }
  else {
    filteredGames = []
  }

  console.log("filteredGames", filteredGames)

  const handleAddFavourite = (game) => {
    setFavourites((prevFavourites) => {
      const isAlreadyFavourite = prevFavourites.find(fav => fav.id === game.id);
      let updatedFavourites;

      if (isAlreadyFavourite) {
        updatedFavourites = prevFavourites.filter(fav => fav.id !== game.id); // Удаляем из избранного
      } else {
        updatedFavourites = [...prevFavourites, game]; // Добавляем в избранное
      }
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));// Сохраняем новое состояние в localStorage
      return updatedFavourites;
    });
  };

  const handleCartUpdate = async (gameId) => {
    const isInCart = cartIds?.includes(gameId);
    const action = isInCart ? "remove" : "add";
  
    setIsUpdating(true);
  
    try {
      await modifyCart({ id: gameId, action }).unwrap();
      
      // Локальное обновление store
      if (isInCart) {
        dispatch(cartSlice.actions.removeFromCart(gameId));
      } else {
        dispatch(cartSlice.actions.addToCart(gameId));
      }
    } catch (error) {
      console.error("Ошибка при обновлении корзины:", error);
    } finally {
      setIsUpdating(false);
    }
  };
  

  return (
    <div>
      <CommonMain>
        <ContainerMain>
          <Title text="Games List" />
          {filteredGames.length ? (
            filteredGames.map((game) => {
              const isFavourite = favourites.some(fav => fav.id === game.id); // Проверяем, есть ли игра в избранном
              return (
                <div key={game.id}>
                  <GameCard
                    game={game}
                    handleCartUpdate={handleCartUpdate}
                    onAddFavourite={handleAddFavourite}
                    isFavourite={isFavourite}
                  />
                </div>
              );
            })
          ) : (
            <AnimationContainer style={{ textAlign: "center" }}>
              <LottieWrapper>
                <Lottie animationData={nothingFound} />
              </LottieWrapper>
              <StyledText>{t('main_nothing_found')}</StyledText>
            </AnimationContainer>
          )}
        </ContainerMain>
      </CommonMain>
    </div>
  );
};


export default ListGames;