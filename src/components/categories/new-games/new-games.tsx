import React from "react";
import { useSelector } from "react-redux";
import { mainApi } from "../../../_data_/service/main-api";
import * as getHomeSearchSelectors from "../../../_data_/selectors/home-app-search";
import Page from "../page/page";

const NewGames = ({ sortOption }) => {
  const allGames = useSelector(getHomeSearchSelectors.allGames);
  const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();
  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (!data && !allGames) {
    return <div>No games found</div>;
  }

  let Games = [];
  Games = allGames.slice(allGames.length / 3, 1 + allGames.length * 2 / 3);
  console.log("сортировка:", sortOption);
  return (
    <div>
      <Page title="Новинки" games={Games} sortOption={sortOption}/>;
    </div>
  );
};

export default NewGames;
