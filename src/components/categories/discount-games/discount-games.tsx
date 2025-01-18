import React, { useState } from 'react';
import { Title } from "../title";
import GameCard from '../card/card';
import mainApi from '../../../_data_/service/main-api';
import ShowMoreButton from '../show-more-btn/show-more-btn';
import { Link } from 'react-router-dom';

const DiscountGames = ({ sortOption }) => {
  const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const handleAddFavourite = (game) => {
    setFavourites((prevFavourites) => {
      const isAlreadyFavourite = prevFavourites.find(fav => fav.id === game.id);
      let updatedFavourites;

      if (isAlreadyFavourite) {
        updatedFavourites = prevFavourites.filter(fav => fav.id !== game.id);
      } else {
        updatedFavourites = [...prevFavourites, game];
      }
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading</div>;

  let Games = [];
  if (data.games1) {
    Games = data.games1;
  } else {
    return <div>Array is empty</div>
  }

  const sortedGames = [...Games];
  if (sortOption === 'по цене max') {
    sortedGames.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'по цене min') {
    sortedGames.sort((a, b) => a.price - b.price);
  }

  const displayedGames = isExpanded ? sortedGames : sortedGames.slice(0, 3);

  return (
    <div>
      <Title text="Скидки" />
      {displayedGames.length > 0 ? (
        displayedGames.map((game) => {
          const isFavourite = favourites.some(fav => fav.id === game.id); // Проверяем, есть ли игра в избранном
          return (
            <div key={game.id}>
              <GameCard game={game} onAddFavourite={handleAddFavourite} isFavourite={isFavourite} />
            </div>
          );
        })
      ) : (
        <div>No games found</div>
      )}

      {displayedGames.length >= 3 && (
        <ShowMoreButton onClick={handleShowMore} isExpanded={isExpanded}>
        </ShowMoreButton>
      )}

      <Link to="/gamehub/favourites">Избранное</Link>

    </div>
  );
};

export default DiscountGames;
