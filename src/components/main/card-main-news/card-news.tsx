import React from "react";

import { ProductСardNews, NewsСardImg, TextCardNews } from "./card-news.styled";

export const CardNews = (props) => {
  return (
    <ProductСardNews>
      <NewsСardImg src={props.img} alt="Card Product" />
      <TextCardNews>
        <p>{props.text}</p>
      </TextCardNews>
    </ProductСardNews>
  );
};
