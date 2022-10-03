import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  isDarkMode: boolean;
  isLoading: boolean;
}

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isDarkMode: false,
    isLoading: false,
  } as CommonState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      localStorage.setItem("isDarkMode", `${action.payload}`);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

const { reducer, actions } = commonSlice;

export const { setDarkMode, setLoading } = actions;

export default reducer;
