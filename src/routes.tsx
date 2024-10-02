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

export const PageRoutes = () => (
  <Routes>
    <Route path="/gamehub" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="categories" element={<Categories />} />
      <Route path="game-page" element={<Game_page />} />
      <Route path="personal-account" element={<PersonalAccount />} />
      <Route path="entrance" element={<Entrance />} />
      <Route path="registration" element={<Registration />} />
      <Route path="shopping-cart" element={<Shopping_cart />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  </Routes>
);
