import React, { useMemo } from "react";
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
  Card2,
} from "./card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GameCard = ({ game, handleCartUpdate, onAddFavourite, isFavourite }) => {
  const handleToggleFavourite = (e) => {
    e.preventDefault();
    onAddFavourite(game); // Передаем игру для добавления или удаления
  };

  const cartIds = useSelector(getCartGamesSelectors.ids); // Получаем ID игр в корзине
  const cartIdFav = useSelector(getFavGamesSelectors.ids);// 

  const gameImages = useMemo(() => {
    return {
      [game.image]: images[game.imgPath],
    };
  }, [game]);

  const isInCart = cartIds?.includes(game.id);

  return (
    <Card>

      <Card2>
        <Link to={`/gamehub/game-page`} style={{ width: '100%', height: '100%', display: 'flex', textDecoration: 'none' }}>
          <CardImg src={gameImages[game.image]} alt={`Обложка игры ${game.title}`} />
          <TitleGame>{game.title}</TitleGame>
          <Description className="description">{game.description}</Description>
          <NewPrice>{game.price} ₽</NewPrice>
          {game.old_price && <OldPrice>{game.old_price} ₽</OldPrice>}
        </Link>

      </Card2>

      <ButtonFavourite onClick={handleToggleFavourite}
        title={isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'} >
        <FontAwesomeIcon icon={faStar} style={{ color: isFavourite ? 'rgba(255, 207, 15, 0.91)' : 'gray' }} />
      </ButtonFavourite>

      <ButtonStyledTopSail isInCart={isInCart} onClick={() => handleCartUpdate(game.id)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </ButtonStyledTopSail>
    </Card>
  );
};

export default GameCard;


