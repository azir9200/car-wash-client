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
       // Fetch a single product by ID
       getServiceDetails: builder.query({
        query: (id: string) => ({
          url: `/services/${id}`,
          method: "GET",
        }),
      }),
  }),
});
export const { useCreteServiceMutation, useGetAllServiceQuery, useGetServiceDetailsQuery, } = serviceApi;
