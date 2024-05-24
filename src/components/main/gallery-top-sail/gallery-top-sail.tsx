import React, { useState } from "react";
import { CardTopSail } from "../card-main-top-sail";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";

import {
  img_top_1,
  img_top_2,
  img_top_3,
  img_top_4,
  img_top_5,
  img_top_6,
  img_top_7,
  img_top_8,
} from "../../../assets/Images_main";

import { arrow_left, arrow_right } from "../../../assets/Images_main";

// Компонент галереи
export const GalleryTopSail = () => {
  const [index, setIndex] = useState(0);
  const cards: any = [
    { img: img_top_5, price: "$10" },
    { img: img_top_6, price: "$12" },
    { img: img_top_7, price: "$11" },
    { img: img_top_8, price: "$15" },
    { img: img_top_1, price: "$10" },
    { img: img_top_2, price: "$10" },
    { img: img_top_3, price: "$10" },
    { img: img_top_4, price: "$10" },
  ];
  const [displayedCards, setdisplayedCards] = useState([
    { img: img_top_1, price: "$10" },
    { img: img_top_2, price: "$10" },
    { img: img_top_3, price: "$10" },
    { img: img_top_4, price: "$10" },
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
