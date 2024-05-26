"use client";

import {
  endpointAllMember,
  endpointAuth,
  endpointSettings,
  endpointUsersManagement,
} from "@/helpers/enpoints";
import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query<any, string>({
      query: (id) => ({
        url: endpointSettings.GET_PROFILE.replace("{id}", id),
        method: "GET",
        flashError: true,
      }),
    }),

    updateUserProfile: build.mutation({
      query: (body: any) => ({
        url: endpointSettings.EDIT_PROFILE,
        method: "PATCH",
        body: body,
        flashError: true,
      }),
    }),

    
    changePassword: build.mutation({
      query: (body: {
        oldPassword: string;
        newPassword: string;
      }) => ({
        url: endpointSettings.CHANGE_PASSWORD,
        method: "PATCH",
        body: body,
        flashError: true,
      }),
    }),

    getSocialEnums: build.query<any, any>({
      query: (params) => ({
        url: endpointSettings.SOCIAL_ENUMS,
        method: "GET",
        params: params,
        flashError: true,
      }),
    }),

    getPositionEnums: build.query<any, any>({
      query: (params) => ({
        url: endpointSettings.POSITION_ENUMS,
        method: "GET",
        params: params,
        flashError: true,
      }),
    }),
    getDepartmentEnums: build.query<any, any>({
      query: (params) => ({
        url: endpointSettings.DEPARTMENT_ENUMS,
        method: "GET",
        params: params,
        flashError: true,
      }),
    }),
    getMajorEnums: build.query<any, any>({
      query: (params) => ({
        url: endpointSettings.MAJOR_ENUMS,
        method: "GET",
        params: params,
        flashError: true,
      }),
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateUserProfileMutation,
  useGetSocialEnumsQuery,
  useGetPositionEnumsQuery,
  useGetDepartmentEnumsQuery,
  useGetMajorEnumsQuery,
  useChangePasswordMutation
} = authAPI;
