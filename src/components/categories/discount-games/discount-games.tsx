import React, { useState } from 'react';
import { Title } from "../title";
import GameCard from '../card/card';
import mainApi from '../../../_data_/service/main-api';
import ShowMoreButton from '../show-more-btn/show-more-btn';

const DiscountGames = ({ sortOption }) => {
  const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
  console.log(data, isLoading, error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading</div>;
  const [showCard, setShowCard] = useState(false);
  const handleShowMore = () => {
    setShowCard(!showCard);
  };

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
  const displayedGames = sortedGames.slice(0, 3);  // первые 3 игры из sortedGames
  return (
    <div>
      <Title text="Скидки" />
      {displayedGames.length > 0
        ? displayedGames.map((game) => (
          <div key={game.id}>
              <GameCard game={game} />
          </div>
        ))
        : <div>No games found</div>}
      {!showCard && (
        <ShowMoreButton onClick={handleShowMore} isExpanded={showCard} />
      )}

      {showCard && (
        <>
          {sortedGames.slice(3).map((game) => ( // Отображение оставшихся игр после первых 3
            <div key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DiscountGames;