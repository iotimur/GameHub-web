import React from "react";
import { Link } from "react-router-dom";

import {
  ProductСardCategories,
  CategoriesСardImg,
  TextCardCategories,
} from "./card-categories.styled";

export const CardCategories = (props) => {
  return (
    <ProductСardCategories>
      <Link to="/gamehub/categories">
        <CategoriesСardImg src={props.img} alt="Card Product" />
      </Link>
      <TextCardCategories>
        <span>{props.text}</span>
      </TextCardCategories>
    </ProductСardCategories>
  );
};
