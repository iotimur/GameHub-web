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
} from "./card-top-sail.styled";

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
      <Link to="/gamehub/game-page">
        <TopSailImg src={props.img} alt="Card Product" />
      </Link>
      <TopSailTextCard>
        <span>{props.price}</span>
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
