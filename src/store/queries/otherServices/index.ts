import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://classified-api.tekup.vn/api/core/",
  }),
  endpoints: (build) => ({
    uploadImage: build.mutation<void, File>({
      query: (file) => ({
        url: "upload",
        method: "POST",
        body: file,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = api;
