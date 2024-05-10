import React from "react";

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
          <ButtonStyledTopSail>
            <i className="fa fa-shopping-cart"></i>
          </ButtonStyledTopSail>
        </TopSailTButton>
      </TopSailTextCard>
    </ProductCardTopSail>
  );
};
