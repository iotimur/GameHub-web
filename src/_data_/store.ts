import { configureStore } from "@reduxjs/toolkit";

import { homeSlice } from "./slices/home-app";
import { homeSeachSlice } from "./slices/home-app-search";
import { cartSlice } from "./slices/cart-games";
import {favoriteGameSlice} from "./slices/favourites-games";

import { mainApi } from "./service/main-api";

export const store = configureStore({
  reducer: {
    [homeSlice.reducerPath]: homeSlice.reducer,
    [homeSeachSlice.reducerPath]: homeSeachSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
    [favoriteGameSlice.reducerPath]:favoriteGameSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
  devTools: {
    name: "bro-cms",
  },
});

export type AppState = ReturnType<typeof store.getState>;
