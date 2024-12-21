import { configureStore } from '@reduxjs/toolkit'

import { homeSlice } from './slices/home-app'
import { homeSeachSlice } from './slices/home-app-search'

import { mainApi } from './service/main-api'

export const store = configureStore({
  reducer: {
    [homeSlice.reducerPath]: homeSlice.reducer,
    [homeSeachSlice.reducerPath]: homeSeachSlice.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
  devTools: {
    name: 'bro-cms',
  },
})

export type AppState = ReturnType<typeof store.getState>
