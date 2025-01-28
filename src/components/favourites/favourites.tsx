import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../list-games/card/card";
import mainApi from "../../_data_/service/main-api";
import { homeSeachSlice } from "../../_data_/slices/home-app-search";
import * as getCartGamesSelectors from "../../_data_/selectors/cart-games";
import { Title } from "../list-games/title";


const FavouritesComponent = () => {
    const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();
    const dispatch = useDispatch();
    
    const [favourites, setFavourites] = React.useState(() => {
        const savedFavourites = localStorage.getItem('favourites');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    const cartIds = useSelector(getCartGamesSelectors.ids); 

    const handleToggleFavourite = (game) => {
        if (favourites.find(fav => fav.id === game.id)) {
            // Удаляем из избранного
            handleRemoveFavourite(game);
        } else {
            // Добавляем в избранное
            const updatedFavourites = [...favourites, game];
            setFavourites(updatedFavourites);
            localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        }
    };

    const handleRemoveFavourite = (game) => {

        const updatedFavourites = favourites.filter(fav => fav.id !== game.id);
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };

    useEffect(() => {
        if (data) {
            dispatch(homeSeachSlice.actions.setAllGames(data));
        }
    }, [data, dispatch]);
  
    return (
        <div>
            <Title text="Избранное" />
            {favourites.map(game => (
                <GameCard 
                    key={game.id} 
                    game={game} 
                    // handleCartUpdate={handleCartUpdate}
              handleToggleFavourite={() => handleToggleFavourite(game.id)}
            
                />
            ))}
        </div>
    );
};

export default FavouritesComponent;
