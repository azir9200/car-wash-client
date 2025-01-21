import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/api/services`,
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
    // Edit a service by ID
    editService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/services/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    // Delete a service by ID
    deleteService: builder.mutation({
      query: (id: string) => ({
        url: `/api/services/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useCreateServiceMutation,
  useGetAllServiceQuery,
  useGetServiceDetailsQuery,
  useEditServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
