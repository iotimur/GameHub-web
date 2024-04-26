import React from "react";

import c from "./card-categories.module.css";

const prod_card_categClassName = "product-card-categories";
const text_cardClassName = "text-card";

export const CardCategories = (props) => {
  return (
    <div className={c[prod_card_categClassName]}>
      <img src={props.img} alt="Card Product" />
      <div className={c[text_cardClassName]}>
        <span>{props.text}</span>
      </div>
    </div>
  );
};
