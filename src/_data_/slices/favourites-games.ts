import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  isLoading: boolean;
  error: null | string;
  ids: number[]; // Храним только массив ID игр
}

const initialState: CartState = {
  isLoading: false,
  error: null as null | string,
  ids: [] as number[], // Обеспечиваем, что ids всегда будет массивом
};

export const favoriteGameSlice = createSlice({
  initialState,
  name: "favorites-games",
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setData: (state, action: PayloadAction<number[]>) => {
      state.isLoading = false;
      state.ids = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Редьюсер для добавления ID в корзину
    addToCart: (state, action: PayloadAction<number>) => {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload); // Добавляем ID, если его еще нет в корзине
      }
    },
    // Редьюсер для удаления ID из корзины
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.ids = state.ids.filter((id) => id !== action.payload); // Удаляем ID
    },
  },
});

export const { setLoading, setData, setError, addToCart, removeFromCart } =
  favoriteGameSlice.actions;

export default favoriteGameSlice.reducer;
