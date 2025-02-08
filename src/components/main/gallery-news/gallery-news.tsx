import React, { useState } from "react";
import { CardNews } from "../card-main-news";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";

import { arrow_left, arrow_right } from "../../../assets/Images_main";

// Компонент галереи
export const GalleryNews = (props) => {
  const [index, setIndex] = useState(0);
  const cards: any = [
    {
      img: props.img.news3,
      text: props.data[2].text,
      link: props.data[2].link,
    },
    {
      img: props.img.news4,
      text: props.data[3].text,
      link: props.data[3].link,
    },
    {
      img: props.img.news1,
      text: props.data[0].text,
      link: props.data[0].link,
    },
    {
      img: props.img.news2,
      text: props.data[1].text,
      link: props.data[1].link,
    },
  ];
  const [displayedCards, setdisplayedCards] = useState([
    {
      img: props.img.news1,
      text: props.data[0].text,
      link: props.data[0].link,
    },
    {
      img: props.img.news2,
      text: props.data[1].text,
      link: props.data[1].link,
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
          <CardNews key={i} img={card.img} text={card.text} link={card.link}/>
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
