import React from "react";
import { Link } from "react-router-dom";

import {
  ProductCardTopSail,
  TopSailImg,
  TopSailTextCard,
  TopSailTButton,
  ButtonStyledTopSail,
} from "./card-top-sail.styled";

export const CardTopSail = (props) => {
  return (
    <ProductCardTopSail>
      <TopSailImg src={props.img} alt="Card Product" />
      <TopSailTextCard>
        <span>{props.price}</span>
        <TopSailTButton>
          <Link to="/gamehub/shopping-cart">
            <ButtonStyledTopSail>
              <i className="fa fa-shopping-cart"></i>
            </ButtonStyledTopSail>
          </Link>
        </TopSailTButton>
      </TopSailTextCard>
    </ProductCardTopSail>
  );
};
