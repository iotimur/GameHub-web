import React from "react";

import c from "./card-top-sail.module.css";

const prod_top_sailClassName = "product-card-top-sail";
const text_cardClassName = "text-card";
const card_button_ClassName = "card-button";

export const CardTopSail = (props) => {
  return (
    <div className={c[prod_top_sailClassName]}>
      <img src={props.img} alt="Card Product" />
      <div className={c[text_cardClassName]}>
        <span>{props.price}</span>
        <div className={c[card_button_ClassName]}>
          <button>
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
