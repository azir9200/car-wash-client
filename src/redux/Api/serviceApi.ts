import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteService: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/services`,
          body: data,
        };
      },
    }),
    //get service api
    getAllService: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
  }),
});
export const { useCreteServiceMutation, useGetAllServiceQuery } = serviceApi;
