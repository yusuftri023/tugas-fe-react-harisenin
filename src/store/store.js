import { configureStore } from "@reduxjs/toolkit";
import {
  allPostSlice,
  postSearchSlice,
  postSlice,
  singlePostSlice,
} from "./reducer/postSlicer";
import { commentSlice } from "./reducer/commentSlicer";
import { userProfileSlice, userSlice } from "./reducer/userSlicer";
import { tabSlice } from "./reducer/tabSlicer";
import { themeSlice } from "./reducer/themeSlicer";

export const store = configureStore({
  reducer: {
    comment: commentSlice.reducer,
    allPost: allPostSlice.reducer,
    post: postSlice.reducer,
    user: userSlice.reducer,
    userProfile: userProfileSlice.reducer,
    tab: tabSlice.reducer,
    theme: themeSlice.reducer,
    postSearch: postSearchSlice.reducer,
    singlePost: singlePostSlice.reducer,
  },
});
