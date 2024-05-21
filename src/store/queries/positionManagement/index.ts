"use client";

import { endpointAuth, endpointPositionManagement } from "@/helpers/enpoints";
import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPosition: build.query<any, any>({
      query: (params) => ({
        url: endpointPositionManagement.GET_ALL_POSITION,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),
    getPositionById: build.query<any, string>({
      query: (id) => ({
        url: endpointPositionManagement.GET_POSITION_BY_ID.replace("{id}", id),
        method: "GET",
        flashError: true,
      }),
    }),
    deletePosition: build.mutation({
      query: (id: string) => ({
        url: endpointPositionManagement.DELETE_POSITION.replace("{id}", id),
        method: "DELETE",
        flashError: true,
      }),
    }),
    createPosition: build.mutation({
      query: (data: any) => ({
        url: endpointPositionManagement.POSITION,
        method: "POST",
        body: data,
        flashError: true,
      }),
    }),
    editPosition: build.mutation({
      query: (data: any) => ({
        url: endpointPositionManagement.EDIT_POSITION_BY_ID.replace(
          "{id}",
          data?.params?.id
        ),
        method: "PATCH",
        body: data?.body,
        flashError: true,
      }),
    }),
  }),
});

export const {
  useGetAllPositionQuery,
  useGetPositionByIdQuery,
  useDeletePositionMutation,
  useCreatePositionMutation,
  useEditPositionMutation,
} = authAPI;
