import React, { useState, useEffect } from "react";
import { CardTopSail } from "../card-main-top-sail";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";
import { useDispatch, useSelector } from "react-redux";
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games";
import {
  useGetCartQuery,
  useAllGamesQuery,
  useAddToCartMutation,
} from "../../../_data_/service/main-api";
import { arrow_left, arrow_right } from "../../../assets/Images_main";
import { cartSlice } from "../../../_data_/slices/cart-games";

// Компонент галереи
export const GalleryTopSail = (props) => {
  const dispatch = useDispatch();
  const {
    isLoading: isCartLoading,
    data: cartData,
    error: cartError,
  } = useGetCartQuery();
  const cartIds = cartData?.ids || [];

  console.log(cartData)

  useEffect(() => {
    dispatch(cartSlice.actions.setData(cartIds));
  }, [cartIds, dispatch]);

  const [index, setIndex] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);

  const cards = [
    { img: props.img.game5, price: props.data[4].text, id: props.data[4] },
    { img: props.img.game6, price: props.data[5].text, id: props.data[5] },
    { img: props.img.game7, price: props.data[6].text, id: props.data[6] },
    { img: props.img.game8, price: props.data[7].text, id: props.data[7] },
    { img: props.img.game1, price: props.data[0].text, id: props.data[0] },
    { img: props.img.game2, price: props.data[1].text, id: props.data[1] },
    { img: props.img.game3, price: props.data[2].text, id: props.data[2] },
    { img: props.img.game4, price: props.data[3].text, id: props.data[3] },
  ];

  useEffect(() => {
    const updatedDisplayedCards = [];
    for (let i = index; i < index + 4; i++) {
      updatedDisplayedCards.push(cards[i % cards.length]);
    }
    setDisplayedCards(updatedDisplayedCards);
  }, [index]);

  return isCartLoading ? (
    <div>Загрузка...</div>
  ) : cartError ? (
    <div>Ошибка загрузки данных</div>
  ) : (
    <GalleryContainer>
      <ArrowLeftMain
        img={arrow_left}
        onClick={() =>
          setIndex((prev) => (prev - 4 + cards.length) % cards.length)
        }
      />
      <GalleryMain>
        {displayedCards.map((card, i) => (
          <CardTopSail key={i} id={card.id} img={card.img} price={card.price} />
        ))}
      </GalleryMain>
      <ArrowRightMain
        img={arrow_right}
        onClick={() => setIndex((prev) => (prev + 4) % cards.length)}
      />
    </GalleryContainer>
  );
};
