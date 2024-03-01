import { createSlice } from "@reduxjs/toolkit";
import { getPost, getUserPost } from "../actions/postAction";

const initialState = {
  data: [],
  isLoading: null,
  error: null,
};

export const postSearchSlice = createSlice({
  name: "postSearch",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getPost.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.data = action.payload.data;
        state.isLoading = false;
        console.log("fulfilled");
        console.timeEnd("fetching completed in: ");
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
        console.log("pending");
        console.time("fetching completed in: ");
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const postSlice = createSlice({
  name: "post",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUserPost.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.data = action.payload.data.posts;
        state.isLoading = false;
        console.log("fulfilled");
        console.timeEnd("fetching completed in: ");
      })
      .addCase(getUserPost.pending, (state) => {
        state.isLoading = true;
        console.log("pending");
        console.time("fetching completed in: ");
      })
      .addCase(getUserPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
