import React from "react";

import {
  ProductСardCategories,
  CategoriesСardImg,
  TextCardCategories,
} from "./card-categories.styled";

export const CardCategories = (props) => {
  return (
    <ProductСardCategories>
      <CategoriesСardImg src={props.img} alt="Card Product" />
      <TextCardCategories>
        <span>{props.text}</span>
      </TextCardCategories>
    </ProductСardCategories>
  );
};
