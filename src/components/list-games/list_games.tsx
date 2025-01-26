import React, { useEffect, useState } from "react";
import GameCard from "./card/card";
import { Title } from "./title/title";
import {
  ContainerMain,
  CardsMain,
  CommonMain,
} from "../main/main-container/main.styled";
import { useDispatch, useSelector } from "react-redux";
import { homeSeachSlice } from "../../_data_/slices/home-app-search";
import { useSearchParams } from "react-router-dom";
import { useAddToCartMutation } from "../../_data_/service/main-api";
import { mainApi } from "../../_data_/service/main-api";
import * as getHomeSearchSelectors from "../../_data_/selectors/home-app-search";
import * as getCartGamesSelectors from "../../_data_/selectors/cart-games"; // Подключаем селектор корзины
import { cartSlice } from "../../_data_/slices/cart-games";
import { ButtonStyledTopSail } from "./list_games.styled"; // Подключаем стилизованную кнопку

const ListGames = () => {
  const dispatch = useDispatch();
  const [modifyCart] = useAddToCartMutation();
  const allGames = useSelector(getHomeSearchSelectors.allGames);
  const cartIds = useSelector(getCartGamesSelectors.ids); // Получаем список id игр в корзине
  const [isUpdating, setIsUpdating] = useState(false); // Флаг для состояния обновления

  // Запрос для получения всех игр
  const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();

  useEffect(() => {
    if (data) {
      dispatch(homeSeachSlice.actions.setAllGames(data));
    }
  }, [data, dispatch]);

  // Получаем параметры из URL
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const ids = query ? query.split(",").map((id) => parseInt(id, 10)) : [];
  const category = searchParams.get("category");

  const [favourites, setFavourites] = useState(() => { // Состояние для избранных игр
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });
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

  // Условие для отображения в зависимости от данных
  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data && !allGames) {
    return <div>No games found</div>;
  }

  // Фильтрация по ID и категории
  let filteredGames = allGames;
  if (ids.length > 0) {
    filteredGames = filteredGames.filter((game) => ids.includes(game.id));
  }
  if (category) {
    filteredGames = filteredGames.filter((game) => game.category === category);
  }

  const handleCartUpdate = async (gameId) => {
    const isInCart = cartIds.includes(gameId); // Проверяем, в корзине ли игра
    const action = isInCart ? "remove" : "add";

    setIsUpdating(true);

    try {
      // Отправляем запрос на изменение корзины
      await modifyCart({ id: gameId, action }).unwrap();

      // Обновляем Redux-хранилище
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
      {/* <CommonMain>
        <ContainerMain> */}
      <PageContainer>
        <CategoriesMain>
          <Title text="Games List" />
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div
                key={game.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <GameCard
                  game={game}
                  inCart={cartIds}
                  handleCartUpdate={handleCartUpdate}
                />
              </div>
            ))
          ) : (
            <p>Nothing found</p>
          )} */}
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => {
              const isFavourite = favourites.some(fav => fav.id === game.id); // Проверяем, есть ли игра в избранном
              return (
                <div key={game.id}>
                  <GameCard game={game} onAddFavourite={handleAddFavourite} isFavourite={isFavourite} />
                </div>
              );
            })
          ) : (
            <div>No games found</div>
          )}
          {/* </ContainerMain>
      </CommonMain> */}
        </CategoriesMain>
      </PageContainer>
    </div>
  );
};

export default ListGames;
