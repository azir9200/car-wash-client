import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/api/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/api/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation } = authApi;
