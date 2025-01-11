import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
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
        url: "/api/services",
        method: "GET",
      }),
    }),
    // Fetch a single product by ID
    getServiceDetails: builder.query({
      query: (id: string) => ({
        url: `/api/services/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreateServiceMutation,
  useGetAllServiceQuery,
  useGetServiceDetailsQuery,
} = serviceApi;
