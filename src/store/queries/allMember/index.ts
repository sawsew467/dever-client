"use client";

import { endpointAllMember, endpointAuth, endpointUsersManagement } from "@/helpers/enpoints";
import { baseApi } from "../base";


export const authAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
    
      getAllUsers: build.query<
        any,
        { page: number; page_size: number; search: string }
      >({
        query: (params) => ({
          url: endpointAllMember.GET_ALL_MEMBERS,
          params: params,
          method: "GET",
          flashError: true,
        }),
      }),
      
    }),
  });
  
  export const {
    useGetAllUsersQuery,
  } = authAPI;
