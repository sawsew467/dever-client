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
  }),
});

export const { useGetMyProfileQuery, useUpdateUserProfileMutation } = authAPI;
