import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeSeachSlice } from "../../../_data_/slices/home-app-search";
import { Link } from "react-router-dom";

import { mainApi } from "../../../_data_/service/main-api";
import * as getHomeSearchSelectors from "../../../_data_/selectors/home-app-search";

import { SearchWithDropdown } from "../search-drop-down/drop-down";

import {
  WrapperSearch,
  SearchInput,
  InputPlace,
  IconSearch,
} from "./search.styled";

export const Search = () => {
  const dispatch = useDispatch();

  // Получаем данные из Redux Store
  const allGames = useSelector(getHomeSearchSelectors.allGames);
  const searchSimbols = useSelector(getHomeSearchSelectors.searchSimbols);
  // const openDropDown = useSelector(getHomeSearchSelectors.openDropDown);
  const foundedID = useSelector(getHomeSearchSelectors.foundedID);

  // Выполняем запрос на получение игр
  const { data, error, isFetching } = mainApi.useAllGamesQuery();

  // **Используем useEffect для обновления store**
  useEffect(() => {
    if (data) {
      dispatch(homeSeachSlice.actions.setAllGames(data));
    }
  }, [data, dispatch]);

  // Проверка на загрузку или ошибку
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error loading games</div>;

  // Обработчик ввода поиска (добавлена проверка !homeSearchGames)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch(homeSeachSlice.actions.setSimbols(inputValue));

    const matchingIds = allGames
      .filter((game) =>
        game.title.toLowerCase().startsWith(inputValue.toLowerCase())
      )
      .map((game) => game.id);

    dispatch(homeSeachSlice.actions.setIds(matchingIds));
    // dispatch(homeSeachSlice.actions.setOpenDropDown(matchingIds.length > 0));
  };

  return (
    <WrapperSearch>
      <SearchInput>
        {(
          <InputPlace
            type="text"
            placeholder="Type to search..."
            onChange={handleInputChange}
          />
        )}

        {searchSimbols && (
          <SearchWithDropdown ids={foundedID} allGames={allGames} />
        )}

        <Link to={`/gamehub/list-games?q=${encodeURIComponent(foundedID.join(","))}`}>
          <IconSearch>
            <i className="fas fa-search"></i>
          </IconSearch>
        </Link>
      </SearchInput>
    </WrapperSearch>
  );
};
