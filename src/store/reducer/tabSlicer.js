import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
  name: "tab",
  initialState: {
    activeTab: "Profile",
  },
  reducers: {
    selectTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { selectTab } = tabSlice.actions;
