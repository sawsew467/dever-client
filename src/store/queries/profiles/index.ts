"use client";

import {
    endpointProfile,
  endpointSettings
} from "@/helpers/enpoints";

import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<any, string>({
      query: (id) => ({
        url: endpointProfile.GET_PROFILE_BY_ID.replace("{id}", id),
        method: "GET",
        flashError: true,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery
} = authAPI;
