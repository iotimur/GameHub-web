import React, { useState } from "react";
import { CardNews } from "../card-main-news";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";

import {
  img_news_1,
  img_news_2,
  img_news_3,
  img_news_4,
} from "../../../assets/Images_main";

import { arrow_left, arrow_right } from "../../../assets/Images_main";

// Компонент галереи
export const GalleryNews = () => {
  const [index, setIndex] = useState(0);
  const cards: any = [
    {
      img: img_news_3,
      text: "Призрак Цусимы» вышел на ПК — и уже ставит рекорды для Sony",
    },
    {
      img: img_news_4,
      text: "Авторы Skull and Bones расширяют планы на второй сезон",
    },
    {
      img: img_news_1,
      text: "Разработчики Delta Force: Hawk Ops представили крупномасштабный режим Havoc Warfare",
    },
    {
      img: img_news_2,
      text: "Первый трейлер Assassin’s Creed Shadows — с темнокожим самураем в феодальной Японии",
    },
  ];
  const [displayedCards, setdisplayedCards] = useState([
    {
      img: img_news_1,
      text: "Разработчики Delta Force: Hawk Ops представили крупномасштабный режим Havoc Warfare",
    },
    {
      img: img_news_2,
      text: "Первый трейлер Assassin’s Creed Shadows — с темнокожим самураем в феодальной Японии",
    },
  ]);

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 2) % cards.length);
    getDisplayedCards();
  };

  const handleBackClick = () => {
    setIndex((prevIndex) => (prevIndex - 2 + cards.length) % cards.length);
    getDisplayedCards();
  };

  const getDisplayedCards = () => {
    const displayedCards = [];
    for (let i = index; i < index + 2; i++) {
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
          <CardNews key={i} img={card.img} text={card.text} />
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
