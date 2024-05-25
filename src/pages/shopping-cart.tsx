import React from 'react';

//import '../css/style_shopping_cart.css';
import Games from '../components/shopping-cart/games-in-cart/games'
import Information from '../components/shopping-cart/information/information'
import  Header  from "../components/main/header/header";
import { Footer } from '../components/footer/footer';
import { PageContainer } from "../components/main/main-container/main.styled";

const shopping_cart = () => {
  return (
    <>
      <PageContainer>
        <Header />  
        <Games/>
        <Information/>
        <Footer/>  
        </PageContainer>
      </>
    );
};

export default shopping_cart;