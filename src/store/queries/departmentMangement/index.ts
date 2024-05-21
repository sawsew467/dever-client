"use client";

import {
  endpointAuth,
  endpointDepartmentManagement,
  endpointUsersManagement,
} from "@/helpers/enpoints";
import { baseApi } from "../base";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDepartments: build.query<any, any>({
      query: (params) => ({
        url: endpointDepartmentManagement.GET_ALL_DEPARTMENTS,
        params: params,
        method: "GET",
        flashError: true,
      }),
    }),
    getDepartmentById: build.query<any, string>({
      query: (id) => ({
        url: endpointDepartmentManagement.GET_DEPARTMENT_BY_ID.replace(
          "{id}",
          id
        ),
        method: "GET",
        flashError: true,
      }),
    }),
    deleteDepartment: build.mutation({
      query: (id: string) => ({
        url: endpointDepartmentManagement.DELETE_DEPARTMENT.replace("{id}", id),
        method: "DELETE",
        flashError: true,
      }),
    }),
    createDepartment: build.mutation({
      query: (data: any) => ({
        url: endpointDepartmentManagement.DEPARTMENT,
        method: "POST",
        body: data,
        flashError: true,
      }),
    }),
    editDepartment: build.mutation({
      query: (data: any) => ({
        url: endpointDepartmentManagement.EDIT_DEPARTMENT_BY_ID.replace(
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
  useGetAllDepartmentsQuery,
  useGetDepartmentByIdQuery,
  useDeleteDepartmentMutation,
  useCreateDepartmentMutation,
  useEditDepartmentMutation,
} = authAPI;
