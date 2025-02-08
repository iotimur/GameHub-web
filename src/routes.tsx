import React from "react";
import { Routes, Route } from "react-router-dom";

import Categories from "./pages/categories";
import MainPage from "./pages/main-page";
import Game_page from "./pages/game-page";
import PersonalAccount from "./pages/personal-account";
import Shopping_cart from "./pages/shopping-cart";
import Entrance from "./pages/entrance";
import Registration from "./pages/registration";
import Layout from "./components/layout/layout";
import ListGames from "./components/list-games/list_games";
import Favourites from "./pages/favourites";

import { URLs } from './_data_/urls';

export const PageRoutes = () => (
  <Routes>
    <Route path={URLs.baseUrl} element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path={URLs.ui.categories} element={<Categories />} />
      <Route path="game-page" element={<Game_page />} />
      <Route path="personal-account" element={<PersonalAccount />} />
      <Route path="entrance" element={<Entrance />} />
      <Route path="registration" element={<Registration />} />
      <Route path="shopping-cart" element={<Shopping_cart />} />
      <Route path="list-games" element={<ListGames />} />
      <Route path="favourites" element={<Favourites />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  </Routes>
);
