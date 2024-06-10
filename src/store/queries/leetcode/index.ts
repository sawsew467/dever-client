"use client";

import { endpointAllMember, endpointLeetcode } from "@/helpers/enpoints";
import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaderboard: build.query<any, any>({
      query: (params) => ({
        url: endpointLeetcode.GET_LEADERBOARD,
        method: "GET",
        flashError: true,
      }),
    }),
    subscribeLeaderboard: build.mutation<any, any>({
      query: (data) => ({
        url: endpointLeetcode.SUBCRIBE_LEADERBOARD,
        method: "POST",
        body: data,
        flashError: true,
      }),
    }),
    updateLeetcode: build.mutation({
      query: () => ({
        url: endpointLeetcode.UPDATE,
        method: "GET",
        flashError: true,
      }),
    }),

    getAllDepartments: build.query<any, any>({
      query: (params) => ({
        url: endpointAllMember.GET_ALL_DEPARTMENTS,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),

    getAllPosition: build.query<any, any>({
      query: (params) => ({
        url: endpointAllMember.GET_ALL_POSITION,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),

    getAllMajor: build.query<any, any>({
      query: (params) => ({
        url: endpointAllMember.GET_ALL_MAJOR,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),
  }),
});

export const {
  useGetLeaderboardQuery,
  useGetAllDepartmentsQuery,
  useGetAllMajorQuery,
  useGetAllPositionQuery,
  useSubscribeLeaderboardMutation,
  useUpdateLeetcodeMutation,
} = authAPI;
