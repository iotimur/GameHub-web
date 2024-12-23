import { getConfigValue } from "@brojs/cli";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Home, BaseResponse } from "../model/common_home";
import { GamesResponse } from "../model/common_games";
import { Categories } from "../model/common_categories";

const baseUrl = getConfigValue("gamehub.api");

export const mainApi = createApi({
  reducerPath: "main-api", // Уникальное имя для этого API
  baseQuery: fetchBaseQuery({ baseUrl }), // Настройка базового URL
  tagTypes: ["App"], // Метки для кэширования
  endpoints: (builder) => ({
    // Эндпоинт для главной страницы
    homePage: builder.query<Home, void>({
      query: () => "/home", // URL для получения данных
      transformResponse: (response: BaseResponse<Home>) => {
        if (response.success === true) {
          return response?.data || { topSail: [], categories: [], news: [] }; // Структура по умолчанию
        } else {
          return { topSail: [], categories: [], news: [] }; // Пустая структура в случае ошибки
        }
      },
    }),

    // Эндпоинт для корзины
    gamesInCart: builder.query<GamesResponse, void>({
      query: () => "/shopping-cart/success", // URL для получения данных
      transformResponse: (response: BaseResponse<GamesResponse>): GamesResponse => {
        if (response.success === true) {
          return response?.data || { GamesResponse: [] }; // Структура по умолчанию
        } else {
          return { Game: [], GamesResponse: [] }; // Пустая структура в случае ошибки
        }
      },
    }),

    categoriesPage: builder.query<Categories, void>({
      query: () => "/categories",
      transformResponse: (response: BaseResponse<Categories>): Categories => {
        if (response.success === true) {
          return response.data || { games1: [], games2: [], games3: [], games4: [] };
        } else {
          return { games1: [], games2: [], games3: [], games4: [] }; 
        }
      },
    }),
  }),
});

// Экспортируем хуки для использования в компонентах
export const { useHomePageQuery, useGamesInCartQuery, useCategoriesPageQuery } = mainApi;

export default mainApi;
