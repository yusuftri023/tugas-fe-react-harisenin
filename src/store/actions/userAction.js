import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser, fetchUserProfile } from "../../services/user.service";

export const getUser = createAsyncThunk(
  "user/getDataUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = fetchUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getUserProfile = createAsyncThunk(
  "userProfile/getDataUserProfile",
  async (id, { rejectWithValue }) => {
    try {
      const data = fetchUserProfile(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
