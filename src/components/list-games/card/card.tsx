import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games";
import * as images from "../../../assets/Images_main";
import {
  Card,
  TitleGame,
  CardImg,
  NewPrice,
  OldPrice,
  ButtonStyledTopSail,
} from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const GameCard = ({ game, handleCartUpdate }) => {
  const cartIds = useSelector(getCartGamesSelectors.ids); // Получаем ID игр в корзине

  const gameImages = useMemo(() => {
    return {
      [game.image]: images[game.imgPath],
    };
  }, [game]);

  const isInCart = cartIds.includes(game.id);

  return (
    <Card>
      <CardImg src={gameImages[game.image]} alt={`Обложка игры ${game.name}`} />
      <TitleGame>{game.name}</TitleGame>
      <NewPrice>{game.text}</NewPrice>
      {game.old_price && <OldPrice>{game.old_price} руб.</OldPrice>}

      <ButtonStyledTopSail isInCart={isInCart} onClick={() => handleCartUpdate(game.id)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </ButtonStyledTopSail>
    </Card>
  );
};

// export default GameCard;
