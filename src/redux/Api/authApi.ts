import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    //get service api
    getUser: builder.query({
      query: () => ({
        url: "/user/get-user",
        method: "GET",
      }),
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation, useGetUserQuery } = authApi;
