// main-api.ts
import { getConfigValue } from "@brojs/cli";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Home, BaseResponse } from "../model/common_home";

const baseUrl = getConfigValue("gamehub.api");

export const mainApi = createApi({
  reducerPath: "main-api", // Уникальное имя для этого API
  baseQuery: fetchBaseQuery({ baseUrl }), // Настройка базового URL
  tagTypes: ["App"], // Метки для кэширования
  endpoints: (builder) => ({
    // Запрос для получения данных
    homePage: builder.query<Home, void>({
      query: () => "/home", // Эндпоинт для получения данных
      transformResponse: (response: BaseResponse<Home>) => {
        if (response.success === true) {
          return response?.data || { topSail: [], categories: [], news: [] }; // Возвращаем корректную структуру по умолчанию
        } else {
          return { topSail: [], categories: [], news: [] }; // Пустая структура в случае ошибки
        }
      },
    }),
  }),
});
