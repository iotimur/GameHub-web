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

// const ListGames = () => {
//   const dispatch = useDispatch();
//   const [modifyCart] = useAddToCartMutation();
//   const allGames = useSelector(getHomeSearchSelectors.allGames);
//   const cartIds = useSelector(getCartGamesSelectors.ids); // Получаем список id игр в корзине
//   const [isUpdating, setIsUpdating] = useState(false); // Флаг для состояния обновления

//   // Запрос для получения всех игр
//   const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();

//   useEffect(() => {
//     if (data) {
//       dispatch(homeSeachSlice.actions.setAllGames(data));
//     }
//   }, [data, dispatch]);

//   // Получаем параметры из URL
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get("q");
//   const ids = query ? query.split(",").map((id) => parseInt(id, 10)) : [];
//   const category = searchParams.get("category");

//   // Условие для отображения в зависимости от данных
//   if (isFetching || isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error</div>;
//   }
//   if (!data && !allGames) {
//     return <div>No games found</div>;
//   }

//   // Фильтрация по ID и категории
//   let filteredGames = allGames;
//   if (ids.length > 0) {
//     filteredGames = filteredGames.filter((game) => ids.includes(game.id));
//   }
//   if (category) {
//     filteredGames = filteredGames.filter((game) => game.category === category);
//   }

//   const handleCartUpdate = async (gameId) => {
//     const isInCart = cartIds.includes(gameId); // Проверяем, в корзине ли игра
//     const action = isInCart ? "remove" : "add";

//     setIsUpdating(true);

//     try {
//       // Отправляем запрос на изменение корзины
//       await modifyCart({ id: gameId, action }).unwrap();

//       // Обновляем Redux-хранилище
//       if (isInCart) {
//         dispatch(cartSlice.actions.removeFromCart(gameId));
//       } else {
//         dispatch(cartSlice.actions.addToCart(gameId));
//       }
//     } catch (error) {
//       console.error("Ошибка при обновлении корзины:", error);
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   const handleFavourite = async (gameId) => {
//     const isInFav = cartIds.includes(gameId); // Проверяем, в корзине ли игра
//     const action = isInFav ? "remove" : "add";

//     setIsUpdating(true);

//     try {
//       // Отправляем запрос на изменение корзины
//       await modifyCart({ id: gameId, action }).unwrap();
//       // Обновляем Redux-хранилище
//       if (isInFav) {
//         dispatch(cartSlice.actions.removeFromCart(gameId));
//       } else {
//         dispatch(cartSlice.actions.addToCart(gameId));
//       }
//     } catch (error) {
//       console.error("Ошибка при обновлении избранного", error);
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   return (
//     <div>
//       <CommonMain>
//         <ContainerMain>
//           <Title text="Games List" />
//           {filteredGames.length > 0 ? (
//             filteredGames.map((game) => (
//               <div
//                 key={game.id}
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <GameCard
//                   game={game}
//                   inCart={cartIds}
//                   handleCartUpdate={handleCartUpdate}
//                   handleToggleFavourite={handleFavourite}
//                 />
//               </div>
//             ))
//           ) : (
//             <p>Nothing found</p>
//           )}
//         </ContainerMain>
//       </CommonMain>
//     </div>
//   );
// };

// export default ListGames;
const ListGames = () => {
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

  return (
    <div>
      <CommonMain>
         <ContainerMain>
           <Title text="Games List" />
      {allGames.map(game => (
        <GameCard 
          key={game.id} 
          game={game} 
          handleCartUpdate={handleCartUpdate}
          handleToggleFavourite={() => handleToggleFavourite(game.id)}
          // isInFav={favourites.some(fav => fav.id === game.id)}
        />
      ))}
      </ContainerMain>
      </CommonMain>
    </div>
  );
};

export default ListGames;
