import { constants } from "@/settings";
import { authAPI } from "@/store/queries/auth";
import webStorageClient from "@/utils/webStorageClient";
import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserStateInfo {
  id: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  avatar: string | null;
  nickname: string | null;
}
interface AuthSlickInterface {
  userInfo: UserStateInfo;
  access_token: any;
}

const initialState: AuthSlickInterface = {
  userInfo: {
    id: null,
    firstname: null,
    lastname: null,
    email: null,
    avatar: null,
    nickname:null,
  },
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
    assignUserInfo: (state, action: PayloadAction<UserStateInfo>) => {
      state.userInfo = action.payload;
    },
    applyChangeAvatar: (state, action: PayloadAction<string>) => {
      state.userInfo.avatar = action.payload;
    },
    applyChangeName: (state, action: PayloadAction<{firstname: string, lastname:string}>) => {
     state.userInfo.firstname = action.payload.firstname;
     state.userInfo.lastname = action.payload.lastname;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.signIn.matchFulfilled,
      (state, action) => {
        webStorageClient.setToken(action?.payload?.data?.token);
        webStorageClient.set(constants.USER_INFO, action?.payload?.data?.user?._id)
      
      
        // webStorageClient.set(constants.USER_INFO, action?.payload.user._id);
        // webStorageClient.set(constants.IS_AUTH, true);
        // state.isAuth = true;
        state.userInfo = action?.payload?.data?.user;
        state.access_token = action?.payload?.data?.token;
      }
    );
  },
});

export const { actionLogin, assignUserInfo, applyChangeAvatar, applyChangeName } = authSlice.actions;

export default authSlice.reducer;
