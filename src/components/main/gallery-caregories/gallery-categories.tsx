import React, { useState } from "react";
import { CardCategories } from "../card-main-categories";
import {
  GalleryContainer,
  GalleryMain,
  ArrowLeftMain,
  ArrowRightMain,
} from "./gallery.styled";

import { arrow_left, arrow_right } from "../../../assets/Images_main";

// Компонент галереи
export const GalleryCategories = (props) => {
  const [index, setIndex] = useState(0);
  const cards: any = [
    { img: props.img.category5, text: props.data[4].text, category: props.data[4].category},
    { img: props.img.category6, text: props.data[5].text, category: props.data[5].category },
    { img: props.img.category7, text: props.data[6].text, category: props.data[6].category },
    { img: props.img.category8, text: props.data[7].text, category: props.data[7].category },
    { img: props.img.category1, text: props.data[0].text, category: props.data[0].category },
    { img: props.img.category2, text: props.data[1].text, category: props.data[1].category },
    { img: props.img.category3, text: props.data[2].text, category: props.data[2].category },
    { img: props.img.category4, text: props.data[3].text, category: props.data[3].category },
  ];
  const [displayedCards, setdisplayedCards] = useState([
    { img: props.img.category1, text: props.data[0].text, category: props.data[0].category },
    { img: props.img.category2, text: props.data[1].text, category: props.data[1].category },
    { img: props.img.category3, text: props.data[2].text, category: props.data[2].category },
    { img: props.img.category4, text: props.data[3].text, category: props.data[3].category },
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
          <CardCategories key={i} img={card.img} text={card.text} category={card.category} />
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
