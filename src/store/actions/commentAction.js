import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchComment } from "../../services/comment.service";

export const getComment = createAsyncThunk(
  "comment/getDataAction",
  async (id, { rejectWithValue }) => {
    try {
      const data = fetchComment(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
