import React from "react";

//import '../css/style_shopping_cart.css';
import Games from "../components/shopping-cart/games-in-cart/games";
import Information from "../components/shopping-cart/information/information";
import { PageContainer } from "../components/main/main-container/main.styled";

const shopping_cart = () => {
  return (
    <>
      <PageContainer>
        <Games />
        <Information />
      </PageContainer>
    </>
  );
};

export default shopping_cart;
