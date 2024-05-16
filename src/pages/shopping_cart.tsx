import React from 'react';

import '../css/style_shopping_cart.css';
import Games from '../components/shopping_cart/games-in-cart/games'
import Information from '../components/shopping_cart/information/information'
import  Header  from "../components/main/header/header";
import { Footer } from '../components/footer/footer';

const shopping_cart = () => {
  return (
    <>
    <Header />  
        <main className="container_my"> 
            <div className="container">
                <div className="zagolov">
                    <p>Ваша корзина</p>
                </div>  
                <Information/>
                <Games/>
            </div>
        </main>
        <Footer/>  

      </>
    );
};

export default shopping_cart;