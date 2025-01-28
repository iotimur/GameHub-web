import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllGames } from "../model/common_home";

const initialState = {
  isLoading: false,
  error: null as null | string,
  searchSimbols: '',
  foundedID: [],
  allGames: [] as AllGames[], // Для хранения игр
  openDropDown: false
};

export const homeSeachSlice = createSlice({
  initialState,
  name: 'home-page-search',
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSimbols: (state, action) => {
      state.isLoading = false;
      state.searchSimbols = action.payload;
    },
    setIds: (state, action) => {
      state.isLoading = false;
      state.foundedID = action.payload;
    },
    setAllGames: (state, action: PayloadAction<AllGames[]>) => {
      state.allGames = action.payload; // Сохраняем данные
    },
    setOpenDropDown: (state, action) => {
      state.openDropDown = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const homeSeachSliceName = homeSeachSlice.name; // Экспортируем им