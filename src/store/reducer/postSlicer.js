import { createSlice } from "@reduxjs/toolkit";
import { getAllPost, getPost, getUserPost } from "../actions/postAction";

const initialState = {
  data: [],
  isLoading: null,
  error: null,
};
export const allPostSlice = createSlice({
  name: "allPost",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;

        console.timeEnd("fetching completed in: ");
      })
      .addCase(getAllPost.pending, (state) => {
        state.isLoading = true;
        console.time("fetching completed in: ");
      })
      .addCase(getAllPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const postSearchSlice = createSlice({
  name: "postSearch",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getPost.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;
        console.timeEnd("fetching completed in: ");
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
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
        state.data = action.payload.data.posts;
        state.isLoading = false;
        console.timeEnd("fetching completed in: ");
      })
      .addCase(getUserPost.pending, (state) => {
        state.isLoading = true;
        console.time("fetching completed in: ");
      })
      .addCase(getUserPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
