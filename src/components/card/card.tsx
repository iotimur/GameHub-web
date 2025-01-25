// import React from 'react';
// import { Card, TitleGame, CardImg, Windows, NewPrice, OldPrice, BtnFavourite, AllCard, FavouriteImage } from './card.styled';
// // import * as gameImg from '../discount-games/index';
// import * as gameImg  from "../../../assets/Images_main/index";
// import { Link } from "react-router-dom";
// import { star1, star2 } from '.';

// const GameCard = ({ game, onAddFavourite, isFavourite }) => {
//     const handleToggleFavourite = () => {
//         onAddFavourite(game); // Передаем игру для добавления или удаления
//     };

//     return (
//         <AllCard>
//             <Link to={"/gamehub/game-page"} style={{ flex: 1 }} >
//                 <Card>
//                     <CardImg src={gameImg[game.image]} alt={`Обложка игры ${game.title}`} />
//                     <TitleGame>{game.title}</TitleGame>
//                     <Windows src={gameImg[game.os]} />
//                     <NewPrice>{game.price} ₽</NewPrice>
//                     {game.old_price && <OldPrice>{game.old_price} ₽</OldPrice>}
//                 </Card>
//             </Link>
//             <BtnFavourite onClick={handleToggleFavourite}
//                 title={isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}>
//                 <FavouriteImage
//                     src={isFavourite ? star2 : star1}
//                     alt={isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
//                 />
//             </BtnFavourite>
//         </AllCard>
//     );
// };

// export default GameCard;

import React from "react";
import { Card, TitleGame, CardImg, Windows, NewPrice, OldPrice, BtnFavourite, AllCard, FavouriteImage } from './card.styled';
import * as gameImg  from "../../assets/cards";
import { Link } from "react-router-dom";
import { star1, star2 } from '.';

const GameCard = ({ game, onAddFavourite, isFavourite }) => {
    const handleToggleFavourite = () => {
        onAddFavourite(game); // Передаем игру для добавления или удаления
    };

    return (
        <AllCard>
            <Link to={"/gamehub/game-page"} style={{ flex: 1 }} >
                <Card>
                    <CardImg src={gameImg[game.imgPath]} alt={`Обложка игры ${game.title}`} />
                    <TitleGame>{game.title}</TitleGame>
                    <Windows src={gameImg[game.os]} />
                    <NewPrice>{game.price} ₽</NewPrice>
                    {game.old_price && <OldPrice>{game.old_price} ₽</OldPrice>}
                </Card>
            </Link>
            <BtnFavourite onClick={handleToggleFavourite}
                title={isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}>
                <FavouriteImage
                    src={isFavourite ? star2 : star1}
                    alt={isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
                />
            </BtnFavourite>
        </AllCard>
    );
};

export default GameCard;