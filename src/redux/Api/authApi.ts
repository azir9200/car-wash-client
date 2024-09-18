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
    getMe: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/me",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation, useGetMeMutation } = authApi;
