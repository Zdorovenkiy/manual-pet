import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

interface IThemeSlice {
  theme: "light" | "dark";
}

const initialState: IThemeSlice = {
    theme: "dark",
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  }
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;

export const themeSelector = createSelector(
  [(state: RootState) => state.theme],
  (state) => state.theme
);