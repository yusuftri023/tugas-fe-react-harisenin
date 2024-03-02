import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllPost,
  fetchPost,
  fetchUserPost,
} from "../../services/post.service";

export const getAllPost = createAsyncThunk(
  "allPost/getAllPost",
  async (_, { rejectWithValue }) => {
    try {
      const data = fetchAllPost();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getDataPost",
  async (_, { rejectWithValue }) => {
    try {
      const data = fetchAllPost();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getUserPost = createAsyncThunk(
  "userPost/getUserPost",
  async (id, { rejectWithValue }) => {
    try {
      const data = fetchUserPost(id);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSinglePost = createAsyncThunk(
  "singlePost/getSinglePost",
  async (id, { rejectWithValue }) => {
    try {
      const data = fetchPost(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
