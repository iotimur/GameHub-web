import { getConfigValue } from "@brojs/cli";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Home, AllGames, BaseResponse } from "../model/common_home";
import { Game } from "../model/common_games"; // Импорт модели для нового эндпоинта
import { CommentsResponse, Comment } from "../model/common_comments"; // Импорт модели для нового эндпоинта
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
          return (
            response?.data || {
              topSail: [],
              categories: [],
              news: [],
            }
          ); // Возвращаем корректную структуру по умолчанию
        } else {
          return { topSail: [], categories: [], news: [] }; // Пустая структура в случае ошибки
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
      query: () => "/game-page",
      transformResponse: (response: BaseResponse<CommentsResponse>) => {
        if (response.success === true) {
          return response?.data || { comments: [] };
        } else {
          return { comments: [] };
        }
      },
    }),
    updateLike: builder.mutation<void, { username: string; likes: number }>({
      queryFn: ({ username, likes }, { dispatch }) => {
        try {
          // Обновляем локальный кэш
          dispatch(
            mainApi.util.updateQueryData("commentsPage", undefined, (draft) => {
              const comment = draft.comments.find((c) => c.username === username);
              if (comment) {
                comment.likes = likes;
              }
            })
          );
          return { data: undefined }; // Возвращаем успешный результат
        } catch (error) {
          console.error("Ошибка при локальном обновлении лайков:", error);
          return {
            error: {
              status: "CUSTOM_ERROR",
              data: "Не удалось обновить лайки локально",
            },
          } as any; // Приведение к типу, чтобы удовлетворить TS
        }
      },
    }),
    
    
    

    categoriesPage: builder.query<Categories, void>({
      query: () => "/categories",
      transformResponse: (response: BaseResponse<Categories>): Categories => {
        if (response.success === true) {
          return response.data || { games1: [], games2: [], games3: [] };
        } else {
          return { games1: [], games2: [], games3: [] };
        }
      },
    }),

    gamesInCart: builder.query<Game[], void>({
      query: () => "/shopping-cart", // URL для получения данных
      transformResponse: (response: BaseResponse<Game[]>): Game[] => {
        if (response.success === true) {
          return response?.data || []; // Возвращаем корректную структуру по умолчанию
        } else {
          return []; // Пустая структура в случае ошибки
        }
      },
    }),
  }),
});

// Экспортируем хуки для использования в компонентах

export const {
  useHomePageQuery,
  useCommentsPageQuery,
  useCategoriesPageQuery,
  useAllGamesQuery,
  useGamesInCartQuery,
  useUpdateLikeMutation
  
} = mainApi;

export default mainApi;
