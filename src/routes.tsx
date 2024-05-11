import React from "react";
import { Routes, Route } from "react-router-dom";

import Categories from './pages/categories';
import MainPage from "./pages/main-page";
import Game_page from "./pages/game_page";
import Personal_account from "./pages/personal-account";
import Shopping_cart from "./pages/shopping_cart";
import Entrance from "./pages/entrance";

export const PageRoutes = () => (
    <Routes>
        <Route path="/gamehub" element={<MainPage/>}/>
        <Route path="/gamehub/categories" element={<Categories/>}/>
        <Route path="/gamehub/game-page" element={<Game_page/>}/>
        <Route path="/gamehub/personal-account" element={<Personal_account/>}/>
        <Route path="/gamehub/entrance" element={<Entrance/>}/>
        <Route path="/gamehub/shopping-cart" element={<Shopping_cart/>}/>

        <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
)