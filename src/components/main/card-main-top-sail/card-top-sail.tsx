import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAddToCartMutation } from "../../../_data_/service/main-api";
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games";
import { cartSlice } from "../../../_data_/slices/cart-games";
import styled from "@emotion/styled";

import {
  ProductCardTopSail,
  TopSailImg,
  TopSailTextCard,
  TopSailTButton,
  ButtonStyledTopSail,
  ButtonFavourite,
} from "./card-top-sail.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const CardTopSail = (props) => {
  const dispatch = useDispatch();
  const cartIds = useSelector(getCartGamesSelectors.ids);
  const [modifyCart] = useAddToCartMutation();
  const [isUpdating, setIsUpdating] = useState(false);

  const isInCart = useMemo(
    () => cartIds.includes(props.id.id),
    [cartIds, props.id.id]
  );

  // Проверяем корзину при загрузке компонента
  useEffect(() => {
    if (cartIds.length > 0) {
      console.log("Корзина загружена:", cartIds);
    }
  }, [cartIds]);
  //   const handleToggleFavourite = () => {
  //     onAddFavourite(game); // Передаем игру для добавления или удаления
  // };
  const handleCartUpdate = async (id) => {
    if (isUpdating) return;

    setIsUpdating(true);

    // Определяем, нужно ли добавить или удалить товар
    const action = isInCart ? 'remove' : 'add';

    if (isInCart) {
      dispatch(cartSlice.actions.removeFromCart(id.id));
    } else {
      dispatch(cartSlice.actions.addToCart(id.id));
    }

    try {
      // Отправляем запрос на изменение корзины с двумя параметрами: id и action
      await modifyCart({ id: id.id, action }).unwrap();
    } catch (error) {
      console.error("Ошибка при обновлении корзины:", error);
      // Откат в случае ошибки
      if (isInCart) {
        dispatch(cartSlice.actions.addToCart(id.id));
      } else {
        dispatch(cartSlice.actions.removeFromCart(id.id));
      }
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <ProductCardTopSail>

      {/* <ButtonFavourite
        onClick={handleToggleFavourite}
        title={isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
      >
        <FontAwesomeIcon icon={faStar}
          style={{ color: isFavourite ? 'rgba(255, 223, 15, 0.91)' : 'gray' }}
        />
      </ButtonFavourite> */}
      <Link to="/gamehub/game-page">
        <TopSailImg src={props.img} alt="Card Product" />

      </Link>
      <TopSailTextCard>
        <span>{props.price} ₽</span>

        <TopSailTButton>
          <ButtonStyledTopSail
            isInCart={isInCart}
            disabled={isUpdating}
            onClick={() => handleCartUpdate(props.id)}
          >
            <i className="fa fa-shopping-cart"></i>
          </ButtonStyledTopSail>
        </TopSailTButton>
      </TopSailTextCard>
    </ProductCardTopSail>
  );
};
