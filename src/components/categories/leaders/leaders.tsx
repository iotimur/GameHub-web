import React, { useState } from "react";
import GameCard from '../card/card';
import { Title } from '../title';
import mainApi from "../../../_data_/service/main-api";
// import ShowMoreButton from "../../game-page/comments-section/show-more-button/show-more-button";
import ShowMoreButton from "../show-more-btn/show-more-btn";

const Leaders = ({ sortOption }) => {
  const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
  console.log(data, isLoading, error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading</div>;
  
  // const [showCard, setShowCard] = useState(false);
  // const handleShowMore = () => {
  //   setShowCard(!showCard);
  // };

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
  const displayedGames = sortedGames.slice(0, 3);  // первые 3 игры из sortedGames
  // const displayedGames = sortedGames ;
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

       {/* {!showCard && ( */}
        {/* <ShowMoreButton onClick={handleShowMore} isExpanded={true} /> */}
      {/* )} */}

      {/* {showCard && (
        <>
          {sortedGames.slice(3).map((game) => ( // Отображение оставшихся игр после первых 3
            <div key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </>
      )} */}
    </div>
  );
};

export default Leaders;
