import React from "react";

import c from "./card-news.module.css";

const prod_card_newsClassName = "product-card-news";
const text_card_newsClassName = "text-card_news";

export const CardNews = (props) => {
  return (
    <div className={c[prod_card_newsClassName]}>
      <img src={props.img} alt="Card Product" />
      <div className={c[text_card_newsClassName]}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
