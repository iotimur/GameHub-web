import React, { useEffect, useState } from "react";
import GameCard from "../../list-games/card/card";

import { useDispatch, useSelector } from "react-redux";
import { homeSeachSlice } from "../../../_data_/slices/home-app-search";
import { useSearchParams } from "react-router-dom";
import { useAddToCartMutation } from "../../../_data_/service/main-api";
import { mainApi } from "../../../_data_/service/main-api";
import * as getHomeSearchSelectors from "../../../_data_/selectors/home-app-search";
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games"; // Подключаем селектор корзины
import { cartSlice } from "../../../_data_/slices/cart-games";
import { ButtonStyledTopSail } from "../../list-games/list_games.styled"; // Подключаем стилизованную кнопку
// import { CommonMain, ContainerMain } from "../../main/main-container/main.styled";
import ShowMoreButton from "../show-more-btn/show-more-btn";
import { Title } from "../title";
import Page from "../page/page";


const Leaders = ({ sortOption}) => {
//  const dispatch = useDispatch();
//   const [modifyCart] = useAddToCartMutation();
  const allGames = useSelector(getHomeSearchSelectors.allGames);
  // const cartIds = useSelector(getCartGamesSelectors.ids);
  const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();
  // const [isExpanded, setIsExpanded] = useState(false);
  //   const handleShowMore = () => {
  //     setIsExpanded(!isExpanded);
  //   };
  // const [favourites, setFavourites] = useState(() => { // Состояние для избранных игр
  //   const savedFavourites = localStorage.getItem('favourites');
  //   return savedFavourites ? JSON.parse(savedFavourites) : [];
  // });
  // useEffect(() => {
  //   localStorage.setItem('favourites', JSON.stringify(favourites));
  // }, [favourites]);

  // const handleAddFavourite = (game) => {
  //   setFavourites((prevFavourites) => {
  //     const isAlreadyFavourite = prevFavourites.find(fav => fav.id === game.id);
  //     let updatedFavourites;

  // console.log(data, isLoading, error);
  //     if (isAlreadyFavourite) {
  //       updatedFavourites = prevFavourites.filter(fav => fav.id !== game.id); // Удаляем из избранного
  //     } else {
  //       updatedFavourites = [...prevFavourites, game]; // Добавляем в избранное
  //     }
  //     localStorage.setItem('favourites', JSON.stringify(updatedFavourites));// Сохраняем новое состояние в localStorage
  //     return updatedFavourites;
  //   });
  // };


  // const handleCartUpdate = async (gameId) => {
  //   const isInCart = cartIds.includes(gameId);
  //   const action = isInCart ? "remove" : "add";

  //   try {
  //     await modifyCart({ id: gameId, action }).unwrap();
  //     if (isInCart) {
  //       dispatch(cartSlice.actions.removeFromCart(gameId));
  //     } else {
  //       dispatch(cartSlice.actions.addToCart(gameId));
  //     }
  //   } catch (error) {
  //     console.error("Ошибка при обновлении корзины:", error);
  //   }
  // };


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
  Games = allGames.slice(0, 1 + (allGames.length / 3));

  // const sortedGames = [...Games];
  // if (sortOption === 'По цене max') {
  //   sortedGames.sort((a, b) => b.price - a.price);
  // } else if (sortOption === 'По цене min') {
  //   sortedGames.sort((a, b) => a.price - b.price);
  // }

  // const displayedGames = isExpanded ? sortedGames : sortedGames.slice(0, 3);
  console.log("сортировка:", sortOption);
  return (
    <div>
      <Page title="Лидеры продаж" games={Games} sortOption={sortOption}/>;
      {/* <Title text="Лидеры продаж" />
      {displayedGames.length > 0 ? (
        displayedGames.map((game) => {
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
        <div>No games found</div>
      )}
      {displayedGames.length >= 3 && (
       <ShowMoreButton onClick={handleShowMore} isExpanded={isExpanded}></ShowMoreButton>
      )} */}
    </div>
  );
};

export default Leaders;