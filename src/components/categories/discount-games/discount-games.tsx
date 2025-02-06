import React, { useEffect, useState } from "react";
// import GameCard from "../../list-games/card/card";
import { useDispatch, useSelector } from "react-redux";
// import { homeSeachSlice } from "../../../_data_/slices/home-app-search";
// import { useSearchParams } from "react-router-dom";
// import { useAddToCartMutation } from "../../../_data_/service/main-api";
import { mainApi } from "../../../_data_/service/main-api";
import * as getHomeSearchSelectors from "../../../_data_/selectors/home-app-search";
// import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games"; // Подключаем селектор корзины
// import { cartSlice } from "../../../_data_/slices/cart-games";
import Page from "../page/page";


const DiscountGames = ({ sortOption}) => {
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
  Games = allGames.filter(game => game.old_price !== undefined)
  .sort((a, b) => a.title.localeCompare(b.title))
  .slice(0, allGames.length);

  return (
    <div>
       <Page title="Скидки" games={Games} sortOption={sortOption}/>;
    </div>
  );
};


export default DiscountGames;