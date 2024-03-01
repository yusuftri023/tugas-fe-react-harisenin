import { configureStore } from "@reduxjs/toolkit";
import { postSearchSlice, postSlice } from "./reducer/postSlicer";
import commentSlicer from "./reducer/commentSlicer";
import userSlicer, { userProfileSlice } from "./reducer/userSlicer";
import { tabSlice } from "./reducer/tabSlicer";
import { themeSlice } from "./reducer/themeSlicer";

export const store = configureStore({
  reducer: {
    comment: commentSlicer,
    post: postSlice.reducer,
    user: userSlicer,
    userProfile: userProfileSlice.reducer,
    tab: tabSlice.reducer,
    theme: themeSlice.reducer,
    postSearch: postSearchSlice.reducer,
  },
});
