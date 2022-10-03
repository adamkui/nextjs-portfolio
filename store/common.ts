import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  isDarkMode: boolean;
}

const commonSlice = createSlice({
  name: "common",
  initialState: {
    isDarkMode: false,
  } as CommonState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      localStorage.setItem("isDarkMode", `${action.payload}`);
    }
  },
});

const { reducer, actions } = commonSlice;

export const { setDarkMode } = actions;

export default reducer;
