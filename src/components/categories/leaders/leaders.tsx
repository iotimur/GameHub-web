import React from "react";

import { Link } from 'react-router-dom';
import GameCard from '../card/card';
import { Title } from '../title';
import { ShowMoreBtn } from '../show-more-btn/show-more-btn.styled';
// import  dataJson from '../../../../stubs/json/categories/success.json'
// const games3 = dataJson.data.games3;
// const games4 = dataJson.data.games4;
import mainApi from "../../../_data_/service/main-api";
const Leaders = ({ sortOption }) => {
  const { data, isLoading, error } = mainApi.useCategoriesPageQuery();
  
  console.log(data, isLoading, error);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;
  //  const [showCard, setShowCard] = useState(false);
  //   const handleShowMore = () => {
  //       setShowCard(true);
  //   };
  
 
  let Games = [];
  if (data.games3) {
    Games = data.games3; 
  } else {
    return <div>Массив пуст</div>
  }
  const sortedGames = [...Games];
  if (sortOption === 'по цене max') {
    sortedGames.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'по цене min') {
    sortedGames.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <Title text="Лидеры продаж" />
      {sortedGames.length > 0
        ? sortedGames.map((game) => (
          <div key={game.id}>
            <Link to={game.id === 1 ? "/gamehub/game-page" : "#"}>
              <GameCard game={game} />
            </Link>
          </div>
        ))
        : <div>Игр не найдено</div>}
     {/* {!showCard && (
       <ShowMoreBtn onClick={handleShowMore}>Показать больше</ShowMoreBtn>
      )}

      {showCard && (
        <>
          {data.games4.map((game) => (
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

