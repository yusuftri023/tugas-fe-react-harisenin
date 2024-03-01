import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchComment } from "../../services/comment.service";

export const getComment = createAsyncThunk(
  "comment/getDataAction",
  async () => {
    const data = fetchComment();
    return data;
  }
);
