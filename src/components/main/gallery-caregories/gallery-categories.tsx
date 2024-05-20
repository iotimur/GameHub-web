import React, { useState } from "react";
import { CardCategories } from "../card-main-categories";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";

import {
  img_categories_1,
  img_categories_2,
  img_categories_3,
  img_categories_4,
  img_categories_5,
  img_categories_6,
  img_categories_7,
  img_categories_8,
} from "../../../../assets/Images_main";

import { arrow_left, arrow_right } from "../../../../assets/Images_main";

// Компонент галереи
export const GalleryCategories = () => {
  const [index, setIndex] = useState(0);
  const cards: any = [
    { img: img_categories_5, text: "экшен" },
    { img: img_categories_6, text: "стратегии" },
    { img: img_categories_7, text: "шутеры" },
    { img: img_categories_8, text: "приключения" },
    { img: img_categories_1, text: "гонки" },
    { img: img_categories_2, text: "глубокий сюжет" },
    { img: img_categories_3, text: "симуляторы" },
    { img: img_categories_4, text: "открытый мир" },
  ];
  const [displayedCards, setdisplayedCards] = useState([
    { img: img_categories_1, text: "гонки" },
    { img: img_categories_2, text: "глубокий сюжет" },
    { img: img_categories_3, text: "симуляторы" },
    { img: img_categories_4, text: "открытый мир" },
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
          <CardCategories key={i} img={card.img} text={card.text} />
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
