import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeSeachSlice } from "../../../_data_/slices/home-app-search";

import { AppState } from '../../../_data_/store'; // Предполагается, что store экспортирует RootState

import { mainApi } from "../../../_data_/service/main-api";

import * as getHomeSearchSelectors from "../../../_data_/selectors/home-app-search";

import {SearchWithDropdown} from "../search-drop-down/drop-down"

import {
  WrapperSearch,
  SearchInput,
  InputPlace,
  IconSearch,
  Dropdown
} from "./search.styled";


export const Search = () => {
  const dispatch = useDispatch();
  
  // Получаем allGames из состояния
  const allGames = useSelector(getHomeSearchSelectors.allGames)
  const searchSimbols = useSelector(getHomeSearchSelectors.searchSimbols)
  const openDropDown = useSelector(getHomeSearchSelectors.openDropDown)
  const foundedID = useSelector(getHomeSearchSelectors.foundedID)

  if(allGames) {
    const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();   

    if(isFetching) {
      return <div></div>
      }
    
      if(error) {
        return <div></div>
      }
    
      if(!data) {
        return <div></div>
      }

      console.log(isFetching, isLoading, data, error);

      if (data) {
        dispatch(homeSeachSlice.actions.setAllGames(data));
      }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch(homeSeachSlice.actions.setSimbols(inputValue)); // Обновляем searchSimbols в store

    // Фильтруем allGames по совпадению с inputValue
    const matchingIds = allGames
      .filter((game) => game.name.toLowerCase().startsWith(inputValue.toLowerCase()))
      .map((game) => game.id);

    // Сохраняем найденные ID в состояние
    dispatch(homeSeachSlice.actions.setIds(matchingIds));
    console.log(matchingIds);

    if(matchingIds){
      // открываем выпадающий список
      dispatch(homeSeachSlice.actions.setOpenDropDown(matchingIds));
    }
  };

  console.log(allGames)

  return (
    <WrapperSearch>
      <SearchInput>
        <a href="" target="_blank" hidden></a>
        <InputPlace
          type="text"
          placeholder="Type to search.."
          onChange={handleInputChange} // Добавляем обработчик
        />
        {openDropDown && searchSimbols && (
          <SearchWithDropdown ids={foundedID} allGames={allGames}/>
        )}
        
        <IconSearch>
          <i className="fas fa-search"></i>
        </IconSearch>
      </SearchInput>
    </WrapperSearch>
  );
};
