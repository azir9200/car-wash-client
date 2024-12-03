import { baseApi } from "./baseApi";

const getMeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getMe: builder.query({
      query: () => ({
        url: "/user/get-user",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = getMeApi;
