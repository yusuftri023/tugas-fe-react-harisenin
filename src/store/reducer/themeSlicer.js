import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: localStorage.getItem("theme") || "dark",
  },
  reducers: {
    switchTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
