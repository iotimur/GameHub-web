import GameCard from "./card/card";
import React, { useEffect, useState } from "react";
import { Title } from "./title/title";
import { ContainerMain, CardsMain, CommonMain } from "../main/main-container/main.styled";

import { useDispatch, useSelector } from "react-redux";
import { homeSeachSlice } from "../../_data_/slices/home-app-search";
import { useSearchParams } from "react-router-dom";

import { mainApi } from "../../_data_/service/main-api";

import * as getHomeSearchSelectors from "../../_data_/selectors/home-app-search";

const ListGames = () => {
  const dispatch = useDispatch();
  const allGames = useSelector(getHomeSearchSelectors.allGames);

  // Запрос для получения всех игр
  const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();

  useEffect(() => {
    if (data) {
      dispatch(homeSeachSlice.actions.setAllGames(data));
    }
  }, [data, dispatch]);

  // Получаем параметры из URL
  const [searchParams] = useSearchParams();
  
  // Извлекаем список ID из параметра q и преобразуем их в числа
  const query = searchParams.get("q");
  const ids = query ? query.split(",").map((id) => parseInt(id, 10)) : [];
  
  // Извлекаем параметр category
  const category = searchParams.get('category');

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

  return (
    <div>
      <CommonMain>
        <ContainerMain>
          <Title text="Games List" />

          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div key={game.id}>
                {/* Передаем объект game в GameCard */}
                <GameCard game={game} />
              </div>
            ))
          ) : (
            <p>Nothing found</p>
          )}
        </ContainerMain>
      </CommonMain>
    </div>
  );
};

export default ListGames;
