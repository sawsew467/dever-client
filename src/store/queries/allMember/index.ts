"use client";

import { endpointAllMember, endpointAuth, endpointDepartmentManagement, endpointUsersManagement } from "@/helpers/enpoints";
import { baseApi } from "../base";


export const authAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
    
      getAllUsers: build.query<
        any,
        { page: number; page_size: number; search: string,  filter: any }
      >({
        query: (params) => ({
          url: endpointAllMember.GET_ALL_MEMBERS,
          params: params,
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
    useGetAllUsersQuery,
    useGetAllDepartmentsQuery,
    useGetAllMajorQuery,
    useGetAllPositionQuery
  } = authAPI;
