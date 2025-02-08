import React from "react";
import { Link } from "react-router-dom";

import { ProductСardNews, NewsСardImg, TextCardNews } from "./card-news.styled";

export const CardNews = (props) => {
  return (
    <Link to={props.link} >
      <ProductСardNews>
        <NewsСardImg src={props.img} alt="Card Product" />
        <TextCardNews>
          <p>{props.text}</p>
        </TextCardNews>
      </ProductСardNews>
    </Link>
  );
};
