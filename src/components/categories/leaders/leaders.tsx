// import React, { useState } from "react";
// import GameCard from '../../card/card';
// import { Title } from '../title';
// import mainApi from "../../../_data_/service/main-api";
// import ShowMoreButton from "../show-more-btn/show-more-btn";
// import { Link } from "react-router-dom";
// const Leaders = ({ sortOption }) => {
//   const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const handleShowMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const [favourites, setFavourites] = useState(() => { // Состояние для избранных игр
//     const savedFavourites = localStorage.getItem('favourites');
//     return savedFavourites ? JSON.parse(savedFavourites) : [];
//   });

//   const handleAddFavourite = (game) => {
//     setFavourites((prevFavourites) => {
//       const isAlreadyFavourite = prevFavourites.find(fav => fav.id === game.id);
//       let updatedFavourites;

//       if (isAlreadyFavourite) {
//         updatedFavourites = prevFavourites.filter(fav => fav.id !== game.id); // Удаляем из избранного
//       } else {
//         updatedFavourites = [...prevFavourites, game]; // Добавляем в избранное
//       }
//       localStorage.setItem('favourites', JSON.stringify(updatedFavourites));// Сохраняем новое состояние в localStorage
//       return updatedFavourites;
//     });
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading</div>;

//   let Games = [];
//   if (data.games3) {
//     Games = data.games3;
//   } else {
//     return <div>Array is empty</div>
//   }

//   const sortedGames = [...Games];
//   if (sortOption === 'по цене max') {
//     sortedGames.sort((a, b) => b.price - a.price);
//   } else if (sortOption === 'по цене min') {
//     sortedGames.sort((a, b) => a.price - b.price);
//   }

//   const displayedGames = isExpanded ? sortedGames : sortedGames.slice(0, 3);

//   return (
//     <div>
//       <Title text="Лидеры продаж" />
//       {displayedGames.length > 0 ? (
//         displayedGames.map((game) => {
//           const isFavourite = favourites.some(fav => fav.id === game.id); // Проверяем, есть ли игра в избранном
//           return (
//             <div key={game.id}>
//               <GameCard game={game} onAddFavourite={handleAddFavourite} isFavourite={isFavourite} />
//             </div>
//           );
//         })
//       ) : (
//         <div>No games found</div>
//       )}

//       {displayedGames.length >= 3 && (
//         <ShowMoreButton onClick={handleShowMore} isExpanded={isExpanded}>
//         </ShowMoreButton>
//       )}
//     </div>
//   );
// };

// export default Leaders;

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
import { CommonMain, ContainerMain } from "../../main/main-container/main.styled";
import ShowMoreButton from "../show-more-btn/show-more-btn";
import { Title } from "../title";


const Leaders = ({ sortOption }) => {
  // const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();

  // const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };
  const dispatch = useDispatch();
  const [modifyCart] = useAddToCartMutation();
  const allGames = useSelector(getHomeSearchSelectors.allGames);
  const cartIds = useSelector(getCartGamesSelectors.ids);
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();

  useEffect(() => {
    if (data) {
      dispatch(homeSeachSlice.actions.setAllGames(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const handleCartUpdate = async (gameId) => {

    const isInCart = cartIds.includes(gameId);
    const action = isInCart ? "remove" : "add";

    try {
      await modifyCart({ id: gameId, action }).unwrap();
      if (isInCart) {
        dispatch(cartSlice.actions.removeFromCart(gameId));
      } else {
        dispatch(cartSlice.actions.addToCart(gameId));
      }
    } catch (error) {
      console.error("Ошибка при обновлении корзины:", error);
    }
  };

  const handleToggleFavourite = (gameId) => {
    if (favourites.find(fav => fav.id === gameId)) {
      // Убрать из избранного
      setFavourites(favourites.filter(fav => fav.id !== gameId));
    } else {
      // Добавить в избранное
      const gameToAdd = allGames.find(game => game.id === gameId);
      if (gameToAdd) {
        setFavourites([...favourites, gameToAdd]);
      }
    }
  };

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
  // let filteredGames = allGames;
  // if (ids.length > 0) {
  //   filteredGames = filteredGames.filter((game) => ids.includes(game.id));
  // }
  // if (category) {
  //   filteredGames = filteredGames.filter((game) => game.category === category);
  // }
  let Games = [];
  Games = allGames.slice(0, 1 + (allGames.length / 3));

  const sortedGames = [...Games];
  if (sortOption === 'по цене max') {
    sortedGames.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'по цене min') {
    sortedGames.sort((a, b) => a.price - b.price);
  }

  const displayedGames = isExpanded ? sortedGames : sortedGames.slice(0, 3);

  return (
    <div>
          <Title text="Лидеры продаж" />
          {displayedGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              handleCartUpdate={handleCartUpdate}
              handleToggleFavourite={() => handleToggleFavourite(game.id)}
            // isInFav={favourites.some(fav => fav.id === game.id)}
            />
          ))}
          {displayedGames.length >= 3 && (
            <ShowMoreButton onClick={handleShowMore} isExpanded={isExpanded}>
            </ShowMoreButton>
          )}
    </div>
  );
};

export default Leaders;
