"use client";

import { endpointAuth, endpointUsersManagement } from "@/helpers/enpoints";
import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    verifyToken: build.mutation({
      query: (token: string) => ({
        url: endpointAuth.VERIFY_TOKEN,
        method: "POST",
        body: { token },
        flashError: true,
      }),
    }),
    getAllUsers: build.query<
      any,
      { page: number; page_size: number; search: string }
    >({
      query: (params) => ({
        url: endpointUsersManagement.GET_ALL_USERS,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),
    deleteUser: build.mutation({
      query: (id: string) => ({
        url: endpointUsersManagement.DELETE_USER.replace("{id}", id),
        method: "DELETE",
        flashError: true,
      }),
    }),
    editUser: build.mutation({
      query: (data: any) => ({
        url: endpointUsersManagement.EDIT_USER_BY_ID.replace(
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
  useVerifyTokenMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useEditUserMutation,
} = authAPI;
