import { createSlice } from "@reduxjs/toolkit";
import { getComment } from "../actions/commentAction";
const initialState = {
  data: [],
  isLoading: null,
  error: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.data = action.payload.data.comments;
    });
  },
});

export default commentSlice.reducer;
