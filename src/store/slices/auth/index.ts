import { authAPI } from "@/store/queries/auth";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthSlickInterface {
  userInfo: any;
  access_token: any;
}

const initialState: AuthSlickInterface = {
  userInfo: null,
  access_token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    actionLogin: (
      state,
      action: PayloadAction<{
        username: string;
        password: string;
        isRemember: boolean;
      }>
    ) => {},
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.signIn.matchFulfilled,
      (state, action) => {
        webStorageClient.setToken(action?.payload?.data?.token);
        // webStorageClient.set(constants.USER_INFO, action?.payload);
        // webStorageClient.set(constants.IS_AUTH, true);
        // state.isAuth = true;
        state.userInfo = action?.payload?.data?.user;
        state.access_token = action?.payload?.data?.token;
      }
    );
  },
});

export const { actionLogin } = authSlice.actions;

export default authSlice.reducer;
