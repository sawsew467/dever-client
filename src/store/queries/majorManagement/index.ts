"use client";

import { endpointMajorManagement } from "@/helpers/enpoints";
import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMajor: build.query<any, any>({
      query: (params) => ({
        url: endpointMajorManagement.GET_ALL_MAJOR,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),
    getMajorById: build.query<any, string>({
      query: (id) => ({
        url: endpointMajorManagement.GET_MAJOR_BY_ID.replace("{id}", id),
        method: "GET",
        flashError: true,
      }),
    }),
    deleteMajor: build.mutation({
      query: (id: string) => ({
        url: endpointMajorManagement.DELETE_MAJOR.replace("{id}", id),
        method: "DELETE",
        flashError: true,
      }),
    }),
    createMajor: build.mutation({
      query: (data: any) => ({
        url: endpointMajorManagement.MAJOR,
        method: "POST",
        body: data,
        flashError: true,
      }),
    }),
    editMajor: build.mutation({
      query: (data: any) => ({
        url: endpointMajorManagement.EDIT_MAJOR_BY_ID.replace(
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
  useGetAllMajorQuery,
  useGetMajorByIdQuery,
  useDeleteMajorMutation,
  useCreateMajorMutation,
  useEditMajorMutation,
} = authAPI;
