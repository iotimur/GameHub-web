import React, { useState } from "react";
import GameCard from '../card/card';
import { Title } from '../title';
import mainApi from "../../../_data_/service/main-api";
import ShowMoreButton from "../show-more-btn/show-more-btn";

const Leaders = ({ sortOption }) => {
  const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(data, isLoading, error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading</div>;

  let Games = [];
  if (data.games3) {
    Games = data.games3;
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
      <Title text="Лидеры продаж" />
      {displayedGames.length > 0
        ? displayedGames.map((game) => (
          <div key={game.id}>
            <GameCard game={game} />
          </div>
        ))
        : <div>No games found</div>}

      {displayedGames.length >= 3 && (
        <ShowMoreButton onClick={handleShowMore} isExpanded={isExpanded} />
      )}
    </div>
  );
};

export default Leaders;