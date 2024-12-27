import { getConfigValue } from "@brojs/cli";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Home, AllGames, BaseResponse } from "../model/common_home";
import { GamesResponse } from "../model/common_games"; // Импорт модели для нового эндпоинта
import { CommentsResponse } from "../model/common_comments"; // Импорт модели для нового эндпоинта
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
          return response?.data || { topSail: [], categories: [], news: [], imgPath: [] }; // Возвращаем корректную структуру по умолчанию
        } else {
          return { topSail: [], categories: [], news: [], imgPath: [] }; // Пустая структура в случае ошибки
        }
      },
    }),
    allGames: builder.query<AllGames[], void>({
      query: () => "/all-games", // Эндпоинт для получения данных
      transformResponse: (response: BaseResponse<AllGames[]>) => {
        if (response.success === true) {
          return response?.data || []; // Возвращаем корректную структуру по умолчанию
        } else {
          return []; // Пустая структура в случае ошибки
        }
      },
    }),

    commentsPage: builder.query<CommentsResponse, void>({
      query: () => "/game-page", // Укажите правильный URL для вашего запроса
      transformResponse: (response: BaseResponse<CommentsResponse>) => {
        if (response.success === true) {
          return response?.data || { comments: [] }; // Структура по умолчанию
        } else {
          return { comments: [] }; // Пустая структура в случае ошибки
        }
      },
    }),

    categoriesPage: builder.query<Categories, void>({
      query: () => "/categories",
      transformResponse: (response: BaseResponse<Categories>): Categories => {
        if (response.success === true) {
          return response.data || { games1: [], games2: [], games3: []};
        } else {
          return { games1: [], games2: [], games3: []};
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

  }),
});

// Экспортируем хуки для использования в компонентах

export const { useHomePageQuery, useCommentsPageQuery, useCategoriesPageQuery, useGamesInCartQuery } = mainApi;

export default mainApi;
