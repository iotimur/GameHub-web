import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games";
import * as getFavGamesSelectors from "../../../_data_/selectors/favourites-games";
import * as images from "../../../assets/Images_main";
import {
  Card,
  TitleGame,
  CardImg,
  NewPrice,
  OldPrice,
  ButtonStyledTopSail,
  ButtonFavourite,
  Description,
} from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const GameCard = ({ game, handleCartUpdate, handleToggleFavourite }) => {
  const cartIds = useSelector(getCartGamesSelectors.ids); // Получаем ID игр в корзине
  const cartIdFav = useSelector(getCartGamesSelectors.ids);// 

  const gameImages = useMemo(() => {
    return {
      [game.image]: images[game.imgPath],
    };
  }, [game]);

  const isInFav = cartIds.includes(game.id);
  const isInCart = cartIdFav.includes(game.id);

  return (
    <Card>
      <CardImg src={gameImages[game.image]} alt={`Обложка игры ${game.title}`} />
      <TitleGame>{game.title}</TitleGame>
      <Description>{game.description}</Description>
      <NewPrice>{game.price} ₽</NewPrice>
      {game.old_price && <OldPrice>{game.old_price} ₽</OldPrice>}

      <ButtonStyledTopSail isInCart={isInCart} onClick={() => handleCartUpdate(game.id)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </ButtonStyledTopSail>

      <ButtonFavourite isInFav={isInFav} onClick={() => handleToggleFavourite(game.id)}
        title={isInFav ? 'Убрать из избранного' : 'Добавить в избранное'}>
        <FontAwesomeIcon icon={faStar} />
      </ButtonFavourite>
    </Card>
  );
};

export default GameCard;
