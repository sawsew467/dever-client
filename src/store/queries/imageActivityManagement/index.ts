"use client";

import { endpointImageActivityManagement } from "@/helpers/enpoints";
import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllImages: build.query<any, any>({
      query: (params) => ({
        url: endpointImageActivityManagement.GET_ALL_IMAGES,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),
    deleteImage: build.mutation({
      query: (id: string) => ({
        url: endpointImageActivityManagement.DELETE_IMAGE.replace("{id}", id),
        method: "DELETE",
        flashError: true,
      }),
    }),
    deleteManyImages: build.mutation({
      query: (ids: string[]) => ({
        url: endpointImageActivityManagement.DELETE_MANY_IMAGE,
        method: "DELETE",
        body: { ids },
        flashError: true,
      }),
    }),
    createImage: build.mutation({
      query: (data: any) => ({
        url: endpointImageActivityManagement.IMAGE,
        method: "POST",
        body: data,
        flashError: true,
      }),
    }),
  }),
});

export const {
  useCreateImageMutation,
  useDeleteImageMutation,
  useGetAllImagesQuery,
  useDeleteManyImagesMutation,
} = authAPI;
