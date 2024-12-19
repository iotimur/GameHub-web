import { configureStore } from '@reduxjs/toolkit'

import { homeSlice } from './slices/home-app'

import { mainApi } from './service/main-api'

export const store = configureStore({
  reducer: {
    [homeSlice.reducerPath]: homeSlice.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
  devTools: {
    name: 'bro-cms',
  },
})

export type AppState = ReturnType<typeof store.getState>
