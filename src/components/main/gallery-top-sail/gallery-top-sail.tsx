import React, { useState } from "react";
import { CardTopSail } from "../card-main-top-sail";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";

import { arrow_left, arrow_right } from "../../../assets/Images_main";

// Компонент галереи
export const GalleryTopSail = (props) => {

  const [index, setIndex] = useState(0);
  const cards: any = [
    { img: props.img.game5, price: props.data[4].text },
    { img: props.img.game6, price: props.data[5].text },
    { img: props.img.game7, price: props.data[6].text },
    { img: props.img.game8, price: props.data[7].text },
    { img: props.img.game1, price: props.data[0].text },
    { img: props.img.game2, price: props.data[2].text },
    { img: props.img.game3, price: props.data[2].text },
    { img: props.img.game4, price: props.data[3].text },
  ];
  const [displayedCards, setdisplayedCards] = useState([
    { img: props.img.game1, price: props.data[0].text },
    { img: props.img.game2, price: props.data[1].text },
    { img: props.img.game3, price: props.data[2].text },
    { img: props.img.game4, price: props.data[3].text },
  ]);

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 4) % cards.length);
    getDisplayedCards();
  };

  const handleBackClick = () => {
    setIndex((prevIndex) => (prevIndex - 4 + cards.length) % cards.length);
    getDisplayedCards();
  };

  const getDisplayedCards = () => {
    const displayedCards = [];
    for (let i = index; i < index + 4; i++) {
      const cardIndex = i % cards.length;
      displayedCards.push(cards[cardIndex]);
    }
    setdisplayedCards(displayedCards);
    console.log(displayedCards);
  };

  return (
    <GalleryContainer>
      <ArrowLeftMain
        img={arrow_left}
        className="left-btn"
        onClick={handleBackClick}
      ></ArrowLeftMain>
      <GalleryMain>
        {displayedCards.map((card, i) => (
          <CardTopSail key={i} img={card.img} price={card.price} />
        ))}
      </GalleryMain>

      <ArrowRightMain
        img={arrow_right}
        className="left-btn"
        onClick={handleNextClick}
      ></ArrowRightMain>
    </GalleryContainer>
  );
};
