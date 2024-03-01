import { createSlice } from "@reduxjs/toolkit";
import { getUser, getUserProfile } from "../actions/userAction";

const initialState = {
  data: [],
  isLoading: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload.data.users;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      });
  },
});
export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: { ...initialState, data: {} },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.data = action.payload.data;
        state.isLoading = false;
        console.log("fulfilled");
        console.timeEnd("fetching completed in: ");
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        console.log("pending");
        console.time("fetching completed in: ");
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        console.log("rejected here");

        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default userSlice.reducer;
