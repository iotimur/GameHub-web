import React, { useState ,useEffect} from 'react';

import {
    windows,
    new_game2,
    sales_game1,
    sales_game2
} from '../../../../assets/images'
import { TitleRectangle, TitleCategory, Card, BtnMoreStyled, Separator, BigSeparator, TitleGame, CardImg, Windows, NewPrice, OldPrice } from '../leaders/leaders.styled';

const DiscountGames = ({ sortOption }) => {
    const [games, setGames] = useState([
        { id: 1, title: 'How to Survive', price: 259, old_price: 500, image: sales_game1 , os: windows},
        { id: 2, title: 'Red Solstice 2 Survivors', price: 561, image: sales_game2,os: windows },
        { id: 3, title: 'Sons Of The Forests', price: 820, old_price: 1100, image: new_game2 ,os: windows},
    ]);
  
    useEffect(() => {
      const sortedGames = [...games];
      if (sortOption === 'по цене max') {
        sortedGames.sort((a, b) => b.price - a.price);
      } else if (sortOption === 'по цене min') {
        sortedGames.sort((a, b) => a.price - b.price);
      }
      setGames(sortedGames);
    }, [sortOption, games]);
  
    return (
      <div>
        <BigSeparator/>
             <BigSeparator/>
             <TitleRectangle>
                 <TitleCategory>Скидки</TitleCategory>
             </TitleRectangle>
             <BigSeparator />
        {games.map((game) => (
          <div key={game.id}>
            <Card>
              <CardImg src={game.image} alt={`Обложка игры ${game.title}`} />
              <TitleGame>{game.title}</TitleGame>
              <Windows src={game.os}/>
              <NewPrice>{game.price} руб.</NewPrice>
              {game.old_price && <OldPrice>{game.old_price} руб.</OldPrice>}
            </Card>
            <Separator />
          </div>
        ))}
        <Separator />
             <BtnMoreStyled>
                 Показать больше
             </BtnMoreStyled>
             <BigSeparator />
             <BigSeparator />
      </div>
    );
};

export default DiscountGames;