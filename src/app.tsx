import React from "react";
import Game_page from "./pages/game_page";
import Categories from "./pages/categories";
import Shopping_cart from "./pages/shopping_cart";
import Personal_account from "./pages/personal_account";
import Entrance from "./pages/entrance";
import Registration from "./pages/registration";
import Main_page from "./pages/main-page";

const App = () => {
  return (
    <>
      <Game_page />,
      <Categories />,
      <Shopping_cart />,
      <Personal_account />,
      <Entrance />,
      <Registration />
      <Main_page />
    </>
  );
};

export default App;
