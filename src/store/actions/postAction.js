import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPost, fetchUserPost } from "../../services/post.service";

export const getPost = createAsyncThunk(
  "post/getDataPost",
  async (_, { rejectWithValue }) => {
    try {
      const data = fetchPost();
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
