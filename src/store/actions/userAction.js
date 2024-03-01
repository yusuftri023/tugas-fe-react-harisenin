import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser, fetchUserProfile } from "../../services/user.service";

export const getUser = createAsyncThunk("user/getDataUser", async () => {
  const data = fetchUser();
  return data;
});
export const getUserProfile = createAsyncThunk(
  "userProfile/getDataUserProfile",
  async (id) => {
    const data = fetchUserProfile(id);
    return data;
  }
);
