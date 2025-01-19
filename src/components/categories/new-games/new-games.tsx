import React, { useState } from 'react';
import GameCard from '../card/card';
import { Title } from '../title';
import mainApi from '../../../_data_/service/main-api';
import ShowMoreButton from '../show-more-btn/show-more-btn';
import { Link } from 'react-router-dom';
const NewGames = ({ sortOption }) => {
  const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  const [favourites, setFavourites] = useState(() => { // Состояние для избранных игр
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  const handleAddFavourite = (game) => {
    setFavourites((prevFavourites) => {
      const isAlreadyFavourite = prevFavourites.find(fav => fav.id === game.id);
      let updatedFavourites;

      if (isAlreadyFavourite) {
        updatedFavourites = prevFavourites.filter(fav => fav.id !== game.id); // Удаляем из избранного
      } else {
        updatedFavourites = [...prevFavourites, game]; // Добавляем в избранное
      }
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));// Сохраняем новое состояние в localStorage
      return updatedFavourites;
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading</div>;

  let Games = [];
  if (data.games2) {
    Games = data.games2;
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
      <Title text="Новинки" />
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

      <Link to="/gamehub/favourites"><h2>Избранное</h2></Link>
    </div>
  );
};
export default NewGames;