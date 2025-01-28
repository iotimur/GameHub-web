import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: null as null | string,
  data: [],
}

export const homeSlice = createSlice({
  initialState,
  name: 'home-page',
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setData: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    setError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
