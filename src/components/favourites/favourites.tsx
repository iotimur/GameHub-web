import React from "react";
import { Title } from "../categories/title";
import GameCard from "../categories/card/card";
import { Span } from "./favoutites.styled";

const FavouritesComponent = () => {
    const [favourites, setFavourites] = React.useState(() => {// Состояние для избранных игр
        const savedFavourites = localStorage.getItem('favourites');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    const handleRemoveFavourite = (game) => {
        const updatedFavourites = favourites.filter(fav => fav.id !== game.id); // Удаляем игру
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));// Обновляем localStorage
    };

    return (
        <>
            <Title text="Избранное" />
            {favourites.length === 0 ? (
                <Span>Избранных игр пока нет</Span>
            ) : (
                favourites.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        onAddFavourite={handleRemoveFavourite} // Передаем функцию удаления
                        isFavourite={true}
                    />
                ))
            )}

        </>
    );
};

export default FavouritesComponent;
