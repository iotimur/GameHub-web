import React, { useState, useEffect } from "react";
import { CardTopSail } from "../card-main-top-sail";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";
import { useDispatch } from "react-redux";

import {
  useGetCartQuery
} from "../../../_data_/service/main-api";
import { arrow_left, arrow_right } from "../../../assets/Images_main";

// Компонент галереи
export const GalleryTopSail = (props) => {
  const dispatch = useDispatch();
  const {
    isLoading: isCartLoading,
    data: cartData,
    error: cartError,
  } = useGetCartQuery();
  const cartIds = cartData?.ids || [];

  console.log("get-запрос на cartIds", cartIds)

  const [index, setIndex] = useState(0);
  const [displayedCards, setDisplayedCards] = useState([]);
 const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem('favourites');
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });
  const cards = [
    { img: props.img.game5, price: props.data[4].price, id: props.data[4] },
    { img: props.img.game6, price: props.data[5].price, id: props.data[5] },
    { img: props.img.game7, price: props.data[6].price, id: props.data[6] },
    { img: props.img.game8, price: props.data[7].price, id: props.data[7] },
    { img: props.img.game1, price: props.data[0].price, id: props.data[0] },
    { img: props.img.game2, price: props.data[1].price, id: props.data[1] },
    { img: props.img.game3, price: props.data[2].price, id: props.data[2] },
    { img: props.img.game4, price: props.data[3].price, id: props.data[3] },
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
          <CardTopSail key={i} id={card.id} img={card.img} price={card.price} 
          />
        ))}
      </GalleryMain>
      <ArrowRightMain
        img={arrow_right}
        onClick={() => setIndex((prev) => (prev + 4) % cards.length)}
      />
    </GalleryContainer>
  );
};
