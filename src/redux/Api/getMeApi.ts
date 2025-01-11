import { baseApi } from "./baseApi";

const getMeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/api/user/get-user",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = getMeApi;
